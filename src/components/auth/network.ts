import express from 'express'
import chalk from 'chalk'
import {verify} from 'jsonwebtoken'
import {configAuth} from '../../config/local_settings'
import {User} from '../../entity/User'
import { createAccessToken, createRefreshToken } from '../../utils/auth'
import { sendRefreshToken } from '../../utils/sendRefreshToken'

const Router = express.Router()

Router.post('/', async (req, res)=>{
  
})

export default Router
