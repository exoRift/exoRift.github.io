import React from 'react'
import {
  NavLink
} from 'react-router-dom'

import '../styles/Navbar.css'

import contacts from '../util/contacts.json'

class Navbar extends React.Component {
  static observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('stuck', !e.isIntersecting),
    { threshold: [1] }
  )

  componentDidMount () {
    const navbar = document.getElementById('navbar')

    Navbar.observer.observe(navbar)
  }

  componentWillUnmount () {
    Navbar.observer.disconnect()
  }

  render () {
    return (
      <div id='navbar'>
        <div className='core'>
          <h1 className='header'>Creations of the Rift</h1>

          <div className='nav-links'>
            {this.props.routes.map((r, i) => <NavLink key={i} to={r.path} className='nav-btn'>{r.name}</NavLink>)}
          </div>
        </div>

        <div className='locations'>
          {contacts.map((c, i) => (
            <a className={'location ' + c.name.toLowerCase()} key={i} href={c.link} target='_blank' rel='noreferrer' title={c.name}>
              <img src={c.icon} alt={c.name}/>
            </a>
          ))}
        </div>

        <div className='blurb'>
          <img id='pfp' src='https://avatars.githubusercontent.com/u/20345400?v=4' alt='pfp'/>

          <div className='tagline'>
            <h1>Hey, I'm Arthur!</h1>
            <h3>I go by <i>exoRift</i> online</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
