import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { EventsPartialState } from './events.reducer';
import {
  LoadEvents,
  EventsLoaded,
  EventsLoadError,
  EventsActionTypes
} from './events.actions';
import {EventsApiService} from "../events-api.service";
import {map} from "rxjs/internal/operators";

@Injectable()
export class EventsEffects {
  @Effect() loadEvents$ = this.dataPersistence.fetch(
    EventsActionTypes.LoadEvents,
    {
      run: (action: LoadEvents, state: EventsPartialState) => {
        this.eventsApiService.getAllEvents().pipe(
          map(value => new EventsLoaded(value))
        )
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        // return new EventsLoaded([]);
      },

      onError: (action: LoadEvents, error) => {
        console.error('Error', error);
        return new EventsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<EventsPartialState>,
    private eventsApiService: EventsApiService
  ) {}
}
