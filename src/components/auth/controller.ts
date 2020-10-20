import {User} from '../../entity/User'
import {getManager} from 'typeorm'
import {compare, hash} from 'bcryptjs'


interface datosCredenciales{
  usuario: string,
  password: string
}

function login(datos: datosCredenciales){
  return  new Promise((resolve, reject)=>{
    const userRepository = getManager().getRepository(User);
    
    const {usuario, password} = datos

    if(!usuario || !password ){
      reject('Usuario o contraseña son requeridos')
    }

    const user = userRepository.findOne({where: datos})

    if(!user){
      reject('El usuario no fue encontrado')
    }


  })
} 

export default {
  login
}

// import {verify} from 'jsonwebtoken'
// import {configAuth} from '../../config/local_settings'
// import {User} from '../../entity/User'
// import { createAccessToken, createRefreshToken } from '../../utils/auth'
// import { sendRefreshToken } from '../../utils/sendRefreshToken'