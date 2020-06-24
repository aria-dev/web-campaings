import { EventsService } from './../service/Events.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Event} from '../model/Event.model';

@Component({
  selector: 'app-NewEvent',
  templateUrl: './NewEvent.component.html',
  styleUrls: ['./NewEvent.component.css']
})

export class NewEventComponent implements OnInit {

  newEventForm;

  constructor(private eventService: EventsService, private formBuilder: FormBuilder,) {
    this.newEventForm = this.formBuilder.group({
      name: '',
      description: '',
      category: '',
      date: '',
      time: '',
      location: ''
    });
   }

  ngOnInit() {
  }

  onSubmit(e) {
    // Process checkout data here
    this.newEventForm.reset();

    const evt = <Event>({
      name: e.name, 
      category: e.category,
      date: e.date,
      description: e.description,
      location: e.location,
      time: e.time,
    });

    this.eventService.addEvent(evt as Event).subscribe((event)=> {
      console.log("Posted to Server");
    });
    console.log('Your order has been submitted', evt);
  }

}
