import { Request, Response } from 'express'
import { getRepository, Repository } from 'typeorm'

import { Event } from '../entity/Event'

class EventController {
  static listAll = async (req: Request, res: Response) => {
    const eventRepository: Repository<Event> = getRepository(Event)
    const events: Event[] = await eventRepository.find({})
    res.send(events)
  }
}

export default EventController
