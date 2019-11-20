import {Module} from "@nestjs/common";
import {EventController} from "./event.controller";
import {EventService} from "./event.service";
import {Event} from "./event.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  // exports: [TypeOrmModule],
  controllers: [
    EventController
  ],
  providers: [
    EventService
  ]
})
export class EventModule {

}
