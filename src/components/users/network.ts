import express from 'express'
import controller from './controller'
import * as response from '../../network/response'

const Router = express.Router()

Router.post('/', async (req, res)=>{

  try {
    controller.createUser(req.body)
    .then((data) => {
      response.success(req, res,'access token:', data, 200)

    })
    .catch((err)=>{
      response.error(req,res,err.message, 500, err)
    })
  } catch (err) {
    
  }
  
})

export default Router
