import Home from '../Home.jsx'
import Projects from '../Projects.jsx'
import Credibility from '../Credibility.jsx'

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    Component: Home
  },
  {
    path: '/cred',
    exact: true,
    name: 'Credibility',
    Component: Credibility
  },
  {
    path: '/projects',
    exact: true,
    name: 'Projects',
    Component: Projects
  }
]

export default routes
