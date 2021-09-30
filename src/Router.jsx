import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './modules/Navbar.jsx'

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
        <Navbar routes={routes}/>

        <div id='app'>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => <route.Component title={document.title} {...props}/>}
            />
          ))}
        </div>
      </Router>
    )
  }

  componentDidMount () {
    const app = document.getElementById('app')

    app.addEventListener('scroll', this.scrollFunction.bind(this, app))
    document.addEventListener('keydown', this.keyFunction.bind(this, app))
  }

  componentWillUnmount () {
    const app = document.getElementById('app')

    app.removeEventListener('scroll', this.scrollFunction)
    document.removeEventListener('keydown', this.keyFunction)
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

        navbar.classList.add('cycling')

        document.removeEventListener('keydown', this.keyFunction)
      }
    } else this.codeProgress = 0
  }
}

export default Routes
