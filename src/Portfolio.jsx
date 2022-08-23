import React from 'react'

import cmHome from './assets/showcase/cm_home.webp'
import cmSchedule from './assets/showcase/cm_schedule.webp'
import cmDirectory from './assets/showcase/cm_directory.webp'
import cmBooking from './assets/showcase/cm_booking.webp'
import loopedSquare from './assets/showcase/looped_square.webp'
import loopedTriangle from './assets/showcase/looped_triangle.webp'
import rfidsCurrent from './assets/showcase/rfids_current.webp'
import rfidsNew from './assets/showcase/rfids_new.webp'
// TEMP
import cycloneBanner from './assets/cyclone_banner.png'
// TEMP

import './styles/Portfolio.css'

import data from './util/data.json'

class Portfolio extends React.Component {
  constructor (props) {
    super(props)

    document.title = props.title + ' - Portfolio'
  }

  render () {
    return (
      <div className='page portfolio'>
        <div className='section'>
          <h1>Professional Work</h1>

          <div>
            <h2><a href='https://525chestnut.com' target='_blank' rel='noreferrer'>525chestnut.com</a></h2>

            <p><i>525chestnut.com</i> is a conference managing website for the office building located at 525 Chestnut St. in Cedarhurst NY.
              Complete with a tenant directory, meeting directory, schedulable meetings, and booking panels, the 525 Chestnut conference manager makes
              ease of managing tenants and delegating their conference room access</p>

            <div className='img-showcase'>
              <img src={cmHome} alt='conference manager home'/>
              <img src={cmSchedule} alt='conference manager schedule'/>
              <img src={cmDirectory} alt='conference manager directory'/>
              <img src={cmBooking} alt='conference manager booking'/>
            </div>
          </div>
        </div>

        <div className='section'>
          <h1>Hobbyist Work</h1>

          <div>
            <h2><a
              href='https://exorift.github.io/react-fluent-mobile/?path=/story/tutorials--selection&panel=false'
              target='_blank'
              rel='noreferrer'
            >Fluent Mobile</a></h2>

            <img src={`${data.api.cdn}/${data.api.user}/react-fluent-mobile/master/assets/banner.png`} alt='banner'/>

            <p>Fluent Mobile is a React component package that adds a bunch of mixins which, when mounted, improve the mobile experience
              on your website ten-fold.</p>

            <ul>
              <li>Custom intuitive context menus that feel smooth and easy to use</li>
              <li>Smart 2-finger text selection</li>
              <li>Advanced media controls</li>
              <li>Easy media viewing</li>
            </ul>

            <div className='img-showcase'>
              gifs coming soon
            </div>
          </div>

          <div>
            <h2><a href='https://github.com/exoRift/cyclone-engine' target='_blank' rel='noreferrer'>Cyclone Engine</a></h2>

            <img src={cycloneBanner} alt='banner'/>

            <p>Cyclone Engine puts the ease into making a Discord bot with a simple framework and refreshingly easy-to-set-up features</p>

            <p>Used by</p>

            <ul>
              <li><a href='https://github.com/exoRift/telex' target='_blank' rel='noreferrer'>Telex</a></li>
              <li><a href='https://github.com/exoRift/antibuzzkil' target='_blank' rel='noreferrer'>Antibuzzkill</a></li>
              <li><a href='https://github.com/exoRift/peacekeeper' target='_blank' rel='noreferrer'>Peacekeeper</a></li>
            </ul>
          </div>

          <div>
            <h2><a href='https://github.com/exoRift/rfid-s' target='_blank' rel='noreferrer'>RFID S</a></h2>

            <p>RFID S is a secure reimagination of the RFID protocol. As opposed to transmitting a private key from the client to the server,
              both the server and client generate a random string of bytes using a shared encryption key which is then transmitted to authenticate,
              leaving zero room for skimming</p>

            <div className='img-showcase'>
              <img src={rfidsCurrent} alt='rfids current'/>
              <img src={rfidsNew} alt='rfids new'/>
            </div>
          </div>

          <div>
            <h2><a href='https://top.gg/bot/462036425710501888' target='_blank' rel='noreferrer'>Telex</a></h2>

            <img src={`${data.api.cdn}/${data.api.user}/telex/master/assets/Splash.png`} alt='banner'/> {/* TEMP */}

            <p>Telex is a Discord bot that allows for the linking of channels between multiple Discord servers. Create rooms and invite your friends.
              Forge relationships over guild alliances in a video game or a common framework your servers use</p>

              {/* eslint-disable-next-line */}
              <img className='telex-card' src='https://discordbots.org/api/widget/462036425710501888.png?topcolor=4d83ff&middlecolor=004dff&usernamecolor=000000&certifiedcolor=0d94ba&datacolor=ffffff&labelcolor=4d83ff&highlightcolor=000000' alt='stats'/>
          </div>

          <div>
            <h2><a href='https://github.com/exoRift/looped-space' target='_blank' rel='noreferrer'>Looped Space Simulator</a></h2>

            <p>This simulator demonstrates how 2D shapes would look in an infinite space as if looking at them from a perspective within the space</p>

            <div className='img-showcase'>
              <img src={loopedSquare} alt='looped square'/>
              <img src={loopedTriangle} alt='looped triangle'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
