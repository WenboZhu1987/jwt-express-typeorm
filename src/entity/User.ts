import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm'
import { Length, IsNotEmpty } from 'class-validator'
import * as bcrypt from 'bcryptjs'
import { Booking } from './Booking'

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @Length(4, 50)
  name: string

  @Column()
  @Length(4, 50)
  email: string

  @Column()
  @Length(4, 20)
  role: string

  @Column()
  @Length(4, 20)
  password: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  // an user can have many bookings, a booking must have one user
  @OneToMany(type => Booking, booking => booking.user)
  bookings: Booking[]

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 12)
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password)
  }
}
