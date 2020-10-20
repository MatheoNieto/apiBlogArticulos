import Auth from '../components/auth/network'
import Articulos from '../components/articulos/network'

const routes = (server:any) => {
  server.use('/auth', Auth);
  server.use('/articulos', Articulos);
}

export default routes