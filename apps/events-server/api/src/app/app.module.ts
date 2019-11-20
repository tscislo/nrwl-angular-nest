import {Module} from "@nestjs/common";
import {EventModule} from "./events/event.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Event} from "./events/event.entity";
import {User} from "./users/user.entity";
import {UserModule} from "./users/user.module";

@Module({
  imports: [
    EventModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'pass',
      database: 'events',
      synchronize: true,
      entities: [Event, User],
    }),
  ]
})
export class AppModule {

}
