import {User} from '../../entity/User'
import {getManager} from 'typeorm'
import {compare} from 'bcryptjs'
import { createAccessToken } from '../../utils/auth'


interface datosCredenciales{
  usuario: string,
  password: string
}

async function login(datos: datosCredenciales){

  try {
    const userRepository = getManager().getRepository(User);

    const {usuario, password} = datos

    if(!usuario || !password ){
      throw new Error('Usuario o contraseña son requeridos')
    }

    const user: any = await userRepository.findOne({
      where: {
        usuario,
        activo: true
      }
    })
    
    if(!user){
      throw new Error('El usuario no fue encontrado')
    }

    const valid = await compare(datos.password, user.password)

    if(!valid){
      throw new Error('Contraseña incorrecta')
    }

    return createAccessToken(user)
    
  } catch (err) {
    return err
  }
}

export default {
  login
}
