import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'
import { Event } from './Event'

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => User, user => user.bookings)
  user: User

  @ManyToOne(type => Event, event => event.bookings)
  event: Event
}
