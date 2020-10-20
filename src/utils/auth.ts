import {sign} from 'jsonwebtoken'
import {configAuth} from '../config/local_settings'

export const createAccessToken  = (user: any)=>{

  const payload = {
    nombres: user.nombres,
    userId: user.id,
  }
  return sign(payload, configAuth.access_token_secret!,{
    expiresIn: '2h'
  })
}
