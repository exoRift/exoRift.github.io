import Home from '../Home.jsx'

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
    Component: Home
  }
]

export default routes
