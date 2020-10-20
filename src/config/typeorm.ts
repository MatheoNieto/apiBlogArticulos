import {createConnection} from "typeorm";
import {configDb} from './local_settings'
import path from 'path'
import chalk from 'chalk'

// export const connection: Connection = await createConnection({
// url: `mongodb://mongodb/${configDb.database}`, edsto era una conexion usando lo de docker pero no funciono
export  async function connect(){
  await createConnection({
      // url: `mongodb://admin:adminpass@localhost:27017/dulsex`,
      url: `postgres://${configDb.user_db}:${configDb.password_db}@${configDb.host_db}:${configDb.port_db}/${configDb.database}`,
      type: "postgres",
      logging: true,
      entities:[
        path.join(__dirname, '/../entity/**/**.ts')
      ],
      migrations:[
        path.join(__dirname, '/../migrations/**/**.ts')
      ],
      cli:{
        entitiesDir: "/../entity",
        migrationsDir: "/../migrations"
      }
  })
  .then(()=>{
    console.log(chalk.black.bgMagenta(`[DATABASE] Database is connected`));
  })
  .catch((err)=>{
    console.log(chalk.black.bgMagenta(`[DATABASE] Database is not connected error=> ${err}`));
  })

}
