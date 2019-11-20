import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {eventsQuery, EventsState, LoadEvents} from "@angular-events/events-data-access";
import {Observable} from "rxjs/Rx";
import {IEvent} from "@angular-events/interfaces";

@Component({
  selector: 'angular-events-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public events: Observable<any>;


  constructor(private store: Store<EventsState>) {

  }

  ngOnInit() {
    this.store.dispatch(new LoadEvents());
    this.events = this.store.select(eventsQuery.getAllEvents)
  }

}
