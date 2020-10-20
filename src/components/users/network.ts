import express from 'express'
import controller from './controller'
import * as response from '../../network/response'

const Router = express.Router()

Router.get('/', async (req, res)=>{
  controller.listUsers()
    .then((data: any)=>{
      response.success(req, res, 'Se encontro los siguientes usuarios:', data, 200)
    })
    .catch((err:any)=>{
      response.error(req, res, 'Unexpect Error', 500, err)
    })
})

Router.get('/:userId', async (req, res)=>{
  try {
    const { userId } = req.params;

    controller.listUsers(userId)
      .then((data: any)=>{
        response.success(req, res,'Se encontro el usuario:', data, 200)
      })
      .catch((err:any)=>{
        response.error(req,res,'Unexpect Error', 500, err)
      })

  } catch (err) {
    response.error(req,res,'Unexpect Error', 500, err)
  }
})

Router.post('/', async (req, res)=>{

  try {

    console.log("==>req.body=>",req.body)
    
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
