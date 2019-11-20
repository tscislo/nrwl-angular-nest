import {EventService} from "./event.service";
import {Controller, Get} from "@nestjs/common";
import {Event} from "./event.entity";

@Controller('events')
export class EventController {

  @Get()
  all(): Event[] {
    return this.eventService.getAllEvents();
  }

  constructor(private eventService: EventService) {

  }
}
