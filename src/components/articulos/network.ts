import express from 'express'
import controller from './controller'
import * as response from '../../network/response'

const Router = express.Router()

Router.get('/', async (req, res)=>{
  controller.listArticulos()
    .then((data: any)=>{
      response.success(req, res, 'Se encontro los siguientes articulos:', data, 200)
    })
    .catch((err:any)=>{
      response.error(req, res, 'Unexpect Error', 500, err)
    })
})

Router.get('/:articuloId', async (req, res)=>{
  try {
    const { articuloId } = req.params;

    controller.listArticulos(articuloId)
      .then((data: any)=>{
        response.success(req, res,'Se encontro el articulos:', data, 200)
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
  
  controller.addArticulo(req.body)
    .then((data)=>{
        response.success(req,res,'se creo correctamente el articulo con los datos:',data,201)
    })
    .catch((err)=>{
        response.error(req, res, 'Problemas internos del servidor', 500, err)
    })
 } catch (err) {
    response.error(req,res,'Unexpect Error', 500, err)
 }
})

Router.put('/:articuloId', async (req, res)=>{
  try {
    const { articuloId } = req.params;

    console.log("=====>put put")
    
    controller.updateArticulo(articuloId, req.body)
      .then((data: any)=>{
        response.success(req, res,`Se update el articulo ${articuloId}`, data, 200)
      })
      .catch((err:any)=>{
        response.error(req,res,'Unexpect Error', 500, err)
      })

  } catch (err) {
    response.error(req,res,'Unexpect Error', 500, err)
  }
})

Router.delete('/:articuloId', async (req, res)=>{
  try {
    const { articuloId } = req.params;
    
    controller.deleteArticulos(articuloId)
      .then((data: any)=>{
        response.success(req, res,`Se elimino el articulo ${articuloId}`, data, 200)
      })
      .catch((err:any)=>{
        response.error(req,res,'Unexpect Error', 500, err)
      })

  } catch (err) {
    response.error(req,res,'Unexpect Error', 500, err)
  }
})

export default Router