import Home from '../Home.jsx'
import Portfolio from '../Portfolio.jsx'

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    Component: Home
  },
  {
    path: '/showcase',
    name: 'Portfolio',
    Component: Portfolio
  }
]

export default routes
