import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('events')
export class Event {
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
