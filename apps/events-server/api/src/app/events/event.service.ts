import {Event} from "./event.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export class EventService {

  getAllEvents(): Event[] {
    // const events = this.eventRepository.all();
    return [];
  }

  // constructor(private eventRepository: EventRepository) {
  //
  // }

}
