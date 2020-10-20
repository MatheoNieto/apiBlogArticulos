import Auth from '../components/auth/network'
import Articulos from '../components/articulos/network'
import Users from '../components/users/network'

const routes = (server:any) => {
  server.use('/auth', Auth);
  server.use('/articulos', Articulos);
  server.use('/user', Users);
}

export default routes