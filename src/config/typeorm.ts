import {createConnection, Tree} from "typeorm";
import {configDb} from './local_settings'
import path from 'path'
import chalk from 'chalk'

export  async function connect(){
  await createConnection({
    type: 'postgres',
    url: `postgres://${configDb.user_db}:${configDb.password_db}@db:${configDb.port_db}/${configDb.database}`,
    logging: true,
    synchronize: true,
    entities:[
      path.join(__dirname, '/../entity/**/**.ts')
    ],
    migrations:[
      path.join(__dirname, '/../migrations/**/**.ts')
    ],
    cli:{
      entitiesDir: "/../entity",
      migrationsDir: "/../migrations"
    },
    extra: {
      connectionLimit: 5
    }
  })
  .then(()=>{
    console.log(chalk.black.bgMagenta(`[DATABASE] Database is connected`));
  })
  .catch((err)=>{
    console.log(chalk.black.bgMagenta(`[DATABASE] Database is not connected error=> ${err}`));
  })

}
