import express from 'express'
import path from 'path'
import router from './network/routes'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { configHost } from './config/local_settings'
import bodyParser from 'body-parser'

export async function startServer() {
  const app = express()

  app.use(cookieParser())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))

  if (configHost.dev) {
    app.use(morgan('combined'))
  }

  router(app)

  return app

}
