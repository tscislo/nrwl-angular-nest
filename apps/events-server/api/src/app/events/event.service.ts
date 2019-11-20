import {Event} from "./event.entity";

export class EventService {

  getAllEvents(): Event[] {
    const events = this.eventRepository.all();
    return events;
  }

  constructor(private eventRepository: EventRepository) {

  }

}
