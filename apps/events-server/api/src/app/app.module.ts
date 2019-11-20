import {Module} from "@nestjs/common";
import {EventModule} from "./events/event.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Event} from "./events/event.entity";

@Module({
  imports: [
    EventModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'pass',
      database: 'events',
      synchronize: true,
      entities: [Event],
    }),
  ]
})
export class AppModule {

}
