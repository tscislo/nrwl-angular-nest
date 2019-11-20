import {EventService} from "./event.service";

export class EventControler {

  all() {
    this.eventService.getAllEvents();
  }

  constructor(private eventService: EventService) {

  }
}
