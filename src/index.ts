import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'
import routes from './routes'
import seed from './utils/seed'

createConnection()
  .then(async (connection: Connection) => {
    // create express app
    const app = express()
    app.use(cors())
    app.use(helmet())
    app.use(bodyParser.json())

    //Set all routes from routes folder
    app.use('/api', routes)

    await seed(connection)

    // start express server
    app.listen(3000)

    console.log(
      'Express server has started on port 3000. Open http://localhost:3000/api/user to see results'
    )
  })
  .catch(error => console.log(error))
