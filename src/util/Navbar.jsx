import React from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'

import splash from '../assets/Splash.png'

import routes from './routes.js'

window.onscroll = () => handleScroll()

function Navbar (props) {
  const location = useLocation()

  return (
    <div id='navbar'>
      <div className='banner' style={{ background: `url(${splash})` }}>
        <p id='header'>Creations of the Rift</p>

        <div className='nav-btn-container'>
          {routes.map((r, i) => (
            <Link key={i} to={r.path} className={'nav-btn' + (location.pathname === r.path ? ' active' : '')}>
              <span>{r.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function handleScroll () {
  const navbar = document.getElementById('navbar')

  if (document.documentElement.scrollTop > 200) navbar.setAttribute('scrolled', 'true')
  else if (document.documentElement.scrollTop < 5) {
    if (navbar.getAttribute('scrolled') === 'true') setTimeout(() => window.scroll({ top: 0, behavior: 'smooth' }), 50)

    navbar.setAttribute('scrolled', 'false')
  }

  for (const scroller of document.getElementsByClassName('scroller')) {
    scroller.style.marginTop = `${document.documentElement.scrollTop}px`
  }
}

export default Navbar
