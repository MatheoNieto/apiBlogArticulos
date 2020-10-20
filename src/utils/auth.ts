import {User} from '../entity/User'
import {sign} from 'jsonwebtoken'
import {configAuth} from '../config/local_settings'

export const createAccessToken  = (user: any)=>{

  const payload = {
    userId: user._id,
    typeUser: user.type_user,
  }
  return sign(payload, configAuth.access_token_secret!,{
    expiresIn: '15m'
  })
}


export const createRefreshToken = (user: any)=>{
  const payload = {
    userId: user._id,
    typeUser: user.type_user,
    tokenVersion:user.tokenVersion
  }
   
  return sign(payload,
    configAuth.refress_token_secret!,{
    expiresIn: '7d'
  })

}