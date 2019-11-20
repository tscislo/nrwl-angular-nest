import {EventService} from "./event.service";
import {Body, Controller, Get, Post} from "@nestjs/common";
import {Event} from "./event.entity";

@Controller('events')
export class EventController {

  @Get()
  all(): any {
    return this.eventService.getAllEvents();
  }

  @Post()
  createEvent(@Body() event: Event) {
    this.eventService.createNewEvent(event);
  }

  constructor(private eventService: EventService) {

  }
}
