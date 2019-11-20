import {UserService} from "./user.service";
import {Body, Controller, Get, Post} from "@nestjs/common";
import {User} from "./user.entity";

@Controller('users')
export class UserController {

  @Get()
  all(): any {
    return this.userService.getAll();
  }

  @Post()
  createEvent(@Body() user: User) {
    this.userService.createNew(user);
  }

  constructor(private userService: UserService) {

  }
}
