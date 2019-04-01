import { Router } from 'express'
import EventController from '../controllers/EventController'
import { checkJwt } from '../middlewares/checkJwt'
import { checkRole } from '../middlewares/checkRole'

const router = Router()

//Get all users
router.get('/', [checkJwt, checkRole(['ADMIN'])], EventController.listAll)

export default router
