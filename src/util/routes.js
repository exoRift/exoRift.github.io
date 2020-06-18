import Home from '../Home.jsx'
import Projects from '../Projects.jsx'

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    Component: Home
  },
  {
    path: '/projects',
    exact: true,
    name: 'Projects',
    Component: Projects
  }
]

export default routes
