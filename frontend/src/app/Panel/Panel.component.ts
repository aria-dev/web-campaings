import { EventsService } from './../service/Events.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../model/Event.model';
@Component({
  selector: 'app-Panel',
  templateUrl: './Panel.component.html',
  styleUrls: ['./Panel.component.css']
})
export class PanelComponent implements OnInit {

  eventList: Event[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.getEventList();
  }

  getEventList() : void {
    this.eventService.getEvents().subscribe((events) => {
      this.eventList = events;
    });
  }

}
