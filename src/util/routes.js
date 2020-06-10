import Home from '../Home.jsx'
import Projects from '../Projects.jsx'

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
    public: true
  },
  {
    path: '/projects/:project',
    exact: false,
    name: 'Projects',
    component: Projects,
    public: true
  }
]

export default routes
