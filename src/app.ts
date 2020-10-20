import express from 'express'
import path from 'path'
import router from './network/routes'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { configHost } from './config/local_settings'

export async function startServer() {
  const app = express()

  app.use(cookieParser())

  if (configHost.dev) {
    app.use(morgan('combined'))
  }

  router(app)

  return app

}
