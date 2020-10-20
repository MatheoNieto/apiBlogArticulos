import {Articulo} from '../../entity/Articulo'
import {getManager} from 'typeorm'

interface dataArticulo {
  titulo: string,
  imagen: string,
  detalles: string,
  descripcion: string,
}

function listArticulos(articuloId?: any){

  const articuloRepository = getManager().getRepository(Articulo);

  const query: any = {
    active:true
  }

  if(articuloId){
    query['id'] = articuloId
  }
  
  return articuloRepository.find({where: query})
  
}

async function addArticulo(datos: dataArticulo){

  const articuloRepository = getManager().getRepository(Articulo);
  
  const data = {
    ...datos,
    active:true,
  }

  const newArticulo = await articuloRepository.insert(data)
  return newArticulo
}

async  function deleteArticulos(articuloId: any){
  
  const articuloRepository = getManager().getRepository(Articulo);

  await articuloRepository.update({id: articuloId }, {active: false})
  return true
}

async  function updateArticulo(articuloId: any, datos: dataArticulo){
  
  const articuloRepository = getManager().getRepository(Articulo);
  await articuloRepository.update({id: articuloId }, datos)

  const articulo = await articuloRepository.findOne({where: {id: articuloId}})

  return articulo
}

export default {
  listArticulos,
  addArticulo,
  deleteArticulos,
  updateArticulo
}