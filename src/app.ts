import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import routes from './routes/routes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(cors())
    this.express.use(morgan('dev'))
    this.express.use(helmet())
  }

  private database() {
    mongoose.set('useNewUrlParser', true)
    mongoose
      .connect('mongodb://localhost/fazt-node-rest-ts')
      .then(() => console.log('Mongo conectado com sucesso!'))
  }

  private routes() {
    this.express.use('/api/posts', routes)
  }
}

export default new App().express
