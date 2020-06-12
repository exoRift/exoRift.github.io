import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './util/Navbar.jsx'

import routes from './util/routes.js'

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Navbar/>

        <div id='app'>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </div>
      </Router>
    )
  }

  componentDidMount () {
    const app = document.getElementById('app')

    app.onscroll = () => this.scrollFunction(app)
  }

  scrollFunction (app) {
    const navbar = document.getElementById('navbar')
    const scroller = document.getElementById('scroller')

    navbar.setAttribute('scrolled', app.scrollTop > 10 ? 'true' : 'false')

    if (scroller) scroller.style.marginTop = `${app.scrollTop}px`
  }
}

export default Routes
