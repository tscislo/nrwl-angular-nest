import {User} from "./user.entity";
import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserService {


  getAll(): any {
    return this.userRepository.find();
  }

  createNew(user: User) {
    this.userRepository.save(user);
  }

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {

  }

}
