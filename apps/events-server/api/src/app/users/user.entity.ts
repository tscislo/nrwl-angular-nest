import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IUser} from "@angular-events/interfaces";

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

}
