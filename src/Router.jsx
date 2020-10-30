import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './util/Navbar.jsx'

import routes from './util/routes.js'

class Routes extends React.Component {
  constructor (props) {
    super(props)

    this.code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    this.codeProgress = 0
  }

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
              component={route.Component}
            />
          ))}
        </div>
      </Router>
    )
  }

  componentDidMount () {
    const app = document.getElementById('app')

    app.onscroll = this.scrollFunction.bind(this, app)
    document.onkeydown = this.keyFunction.bind(this, app)
  }

  scrollFunction (app) {
    const navbar = document.getElementById('navbar')
    const scroller = document.getElementById('scroller')

    navbar.setAttribute('scrolled', app.scrollTop > 10 ? 'true' : 'false')

    if (scroller) scroller.style.paddingTop = `${app.scrollTop}px`
  }

  keyFunction (app, event) {
    if (this.code[this.codeProgress] === event.keyCode) {
      this.codeProgress++

      if (this.codeProgress === this.code.length) {
        const navbar = document.getElementById('navbar')

        navbar.classList.add('spinning')

        document.onkeydown = undefined
      }
    } else this.codeProgress = 0
  }
}

export default Routes
