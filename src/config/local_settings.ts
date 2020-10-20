import 'dotenv/config'

// PARA EL SERVIDOR
export const configHost: any = {
  dev: process.env.NODE_ENV == 'production',
  port: process.env.PORT || 3000,
  host: process.env.HOST_NAME || 'http://localhost',
  cors: process.env.CORS,
}

// BASE DE DATOS
export const configDb: any = {
  host_db: process.env.HOST_DB || 'localhost',
  port_db: process.env.PORT_DB || 27017,
  user_db: process.env.USER_DB || 'root',
  password_db: process.env.PASSWORD_DB || '',
  database: process.env.DATABASE || 'db',
}