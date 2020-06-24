import { EventsService } from './../service/Events.service';
import { Event } from './../model/Event.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  title = "All Events";
  events : Event[];
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }


  getEvents(): void {
    this.eventsService.getEvents().subscribe((events) => this.events = events);
  }

}
