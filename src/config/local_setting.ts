import 'dotenv/config'

// PARA EL SERVIDOR
export const configHost: any = {
  dev: process.env.NODE_ENV == 'production',
  port: process.env.PORT || 3000,
  host: process.env.HOST_NAME || 'http://localhost',
  cors: process.env.CORS,
}
