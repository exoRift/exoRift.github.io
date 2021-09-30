import React from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'

import splash from '../assets/Splash.png'

import '../styles/Navbar.css'

function Navbar (props) {
  const location = useLocation()

  return (
    <div id='navbar'>
      <div id='banner' style={{ backgroundImage: `url(${splash})` }}>
        <p id='header'>Creations of the Rift</p>

        <div className='nav-btn-container'>
          {props.routes.map((r, i) => (
            <Link key={i} to={r.path} className={'nav-btn' + (location.pathname === r.path ? ' active' : '')}>
              <span>{r.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
