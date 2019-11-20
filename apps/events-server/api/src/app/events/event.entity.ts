import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IEvent} from "@angular-events/interfaces";

@Entity('events')
export class Event implements IEvent {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  published: boolean;
}
