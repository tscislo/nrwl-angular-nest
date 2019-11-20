import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEvents from './state/events.reducer';
import { EventsEffects } from './state/events.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromEvents.EVENTS_FEATURE_KEY, fromEvents.reducer),
    EffectsModule.forFeature([EventsEffects])
  ]
})
export class EventsDataAccessModule {}
