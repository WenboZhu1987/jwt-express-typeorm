import { Connection } from 'typeorm'
import { User } from '../entity/User'
import { Event } from '../entity/Event'
import { Booking } from '../entity/Booking'

const seed = async (connection: Connection) => {
  // insert new users for test
  const user01 = new User()
  user01.name = 'Jeremy'
  user01.email = 'isdance2004@hotmail.com'
  user01.role = 'ADMIN'
  user01.password = '123456'

  const user02 = new User()
  user02.name = 'Nicole'
  user02.email = 'test@test.com'
  user02.role = 'ADMIN'
  user02.password = '123456'

  const event01 = new Event()
  const event02 = new Event()

  event01.name = 'My test event 01'
  event01.location = 'George Street, NSW 2010'
  event01.date = new Date('2022-10-22')

  event02.name = 'My test event 02'
  event02.location = 'Hill Street, NSW 2010'
  event02.date = new Date('2020-11-22')

  const booking01 = new Booking()
  const booking02 = new Booking()

  booking01.event = event01
  booking01.user = user01

  booking02.event = event02
  booking02.user = user01

  await connection.manager.save(user01)
  await connection.manager.save(user02)
  await connection.manager.save(event01)
  await connection.manager.save(event02)
  await connection.manager.save(booking01)
  await connection.manager.save(booking02)
}

export default seed
