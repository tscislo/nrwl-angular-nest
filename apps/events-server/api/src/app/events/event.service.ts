import {Event} from "./event.entity";
import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class EventService {


  getAllEvents(): any {
    return this.eventRepository.find();
  }

  createNewEvent(event: Event) {
    this.eventRepository.save(event);
  }

  constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {

  }

}
