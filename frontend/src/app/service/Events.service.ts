import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Event } from '../model/Event.model';

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private eventsUrl = 'http://localhost:8080';
    constructor(private http: HttpClient,) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };

    /** GET heroes from the server */
    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(this.eventsUrl + "/events")
            .pipe(
                tap(_ => console.log('fetched events')),
                catchError(this.handleError<Event[]>('events', []))
            );
    }

      //////// Save methods //////////

  /** POST: add a new event to the server */
  addEvent(evt: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl + "/addEvent", evt, this.httpOptions).pipe(
      tap((newEvent: Event) => console.log(`added event ${newEvent}`)),
      catchError(this.handleError<Event>('addEvent'))
    );
  }


    

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
