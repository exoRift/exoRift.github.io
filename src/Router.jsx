import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  FluentSelectionMixin
} from 'react-fluent-mobile'

import NotFound from './NotFound.jsx'

import Navbar from './modules/Navbar.jsx'

import routes from './util/routes.js'

class Router extends React.Component {
  static title = 'Rift Creations'

  static code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  codeProgress = 0

  constructor (props) {
    super(props)

    this.keyDown = this.keyDown.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.keyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.keyDown)
  }

  render () {
    return (
      <BrowserRouter>
        <Navbar routes={routes}/>

        <div id='app'>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.Component title={Router.title}/>}
              />
            ))}

            <Route path='*' element={<NotFound onError={this.onError} title={Router.title}/>}/>
          </Routes>

          <FluentSelectionMixin theme='light'/>
        </div>
      </BrowserRouter>
    )
  }

  keyDown (e) {
    if (Router.code[this.codeProgress] === e.keyCode) {
      this.codeProgress++

      if (this.codeProgress === Router.code.length) {
        document.removeEventListener('keydown', this.keyDown)
      }
    } else this.codeProgress = 0
  }
}

export default Router
