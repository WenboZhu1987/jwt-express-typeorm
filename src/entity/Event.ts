import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  OneToMany,
  Column
} from 'typeorm'
import { Length, IsNotEmpty } from 'class-validator'
import { Booking } from './Booking'

@Entity()
@Unique(['name'])
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @Length(4, 50)
  name: string

  @Column()
  @Length(4, 50)
  location: string

  @Column()
  date: Date

  // an event can have many booking records, a booking must have one event
  @OneToMany(type => Booking, booking => booking.event)
  bookings: Booking[]
}
