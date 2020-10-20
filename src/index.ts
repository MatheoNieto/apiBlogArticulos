import 'reflect-metadata'
import {connect} from './config/typeorm'
import {startServer} from './app'
import {configHost} from './config/local_settings'

export async function main(){
  connect()
  const app = await startServer()
  app.listen(configHost.port, () => {
    console.log("express server started");
  })
}

main()