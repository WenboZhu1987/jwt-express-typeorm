import { Router } from 'express'
import auth from './auth'
import user from './user'
import event from './event'

const routes = Router()

routes.use('/auth', auth)
routes.use('/user', user)
routes.use('/event', event)

export default routes
