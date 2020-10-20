import {User} from '../../entity/User'
import {getManager} from 'typeorm'
import { hash } from "bcryptjs";
import { createAccessToken } from '../../utils/auth'

interface dataCreateUser{
  nombres: string,
  usuario: string,
  password: string
}

function listUsers(userId?: any){

  const userRepository = getManager().getRepository(User);

  const query: any = {
    activo:true
  }

  if(userId){
    query['id'] = userId
  }
  
  return userRepository.find({where: query})
  
}

async function createUser(datos: dataCreateUser){

  const userRepository = getManager().getRepository(User);

  const hashedPassword = await hash(datos.password, 12)

  const data = {
    nombres: datos.nombres,
    usuario: datos.usuario,
    password: hashedPassword,
    active:true,
  }

  await userRepository.insert(data)

  const user = userRepository.findOne({
    where: data
  })
  
  return createAccessToken(user)
}

export  default {
  createUser,
  listUsers
}