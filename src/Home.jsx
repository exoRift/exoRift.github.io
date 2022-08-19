import React from 'react'

import Gallery from './modules/Gallery.jsx'
import ProjectPane from './modules/ProjectPane.jsx'

import profileBanner from './assets/profile_banner.png'
// TEMP
import cycloneBanner from './assets/cyclone_banner.png'
// TEMP

import './styles/Home.css'

import data from './util/data.json'

class Home extends React.Component {
  static subsectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) entry.target.classList.toggle('visible', entry.isIntersecting)
    },
    { threshold: [0.5] }
  )

  static birthday = new Date(data.personal.birthday)

  constructor (props) {
    super(props)

    document.title = props.title + ' - Home'
  }

  componentDidMount () {
    const subsections = document.getElementsByClassName('subsection')

    for (const subsection of subsections) {
      Home.subsectionObserver.observe(subsection)

      subsection.style.setProperty('--reveal-color', `hsl(${(Math.random() * 360)}, 80%, 50%)`)
    }
  }

  componentWillUnmount () {
    Home.subsectionObserver.disconnect()
  }

  render () {
    return (
      <div className='page home'>
        <div className='section pinned' id='pinned'>
          <div className='pins'>
            {data.projects.pinned.map((p, i) => (
              <a className='pin' key={i} href={`https://github.com/${data.api.user}/${p}`} target='_blank' rel='noreferrer'>
                <img // TEMP: Until banner convention is changed
                src={p === 'cyclone-engine'
                  ? cycloneBanner
                  : `${data.api.cdn}/${data.api.user}/${p}/master/assets/banner.png`}
                alt={p}
                onError={(e) => { e.target.src = `${data.api.cdn}/${data.api.user}/${p}/master/assets/Splash.png` }}/>
              </a>
            ))}
          </div>
        </div>

        <div className='section about'>
          <div className='subsection' id='me'>
            <h1>Who are you?</h1>

            <p>My name is Arthur Neuman and I'm a fullstack software engineer. I graduated high school with an advanced Regents diploma and 4.0 GPA.
              I'm currently enrolled at Rensselaer Polytechnic Institute in the pursuit of a Computer Science Bachelor's degree
              and a minor in Electrical, Computer, and Systems Engineering</p>

            <p>My development skills include</p>

            <ul>
              <li>Thorough problem solving</li>
              <li>Foresight of product interactions (planning contingencies, unit testing, etc.)</li>
              <li>Writing optimized, concise, efficient code the first time</li>
              <li>The fortitude to complete even the most tedious of tasks (optimizing, refactoring, etc.)</li>
              <li>A deep understanding of the code I write</li>
            </ul>

            <p>I've been a programmer for {new Date(Date.now() - Home.birthday.getTime()).getFullYear() - 1970 - 10} years
              and have released several open-source projects for use in both consumer and development spaces.
              I've done hobbyist work, professional work, freelance work, and have contributed to various other resources found on
              codebases such as Github.</p>
          </div>

          <div className='subsection' id='capabilities'>
            <h1>What can you do?</h1>

            <p>I've worked with multiple languages on both personal and professional projects with multiple languages in many environments.
              Prominent members of those lists being</p>

            <h3>Languages</h3>
            <Gallery width={50}>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/javascript.svg'} alt='js'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/nodejs-icon.svg'} alt='node'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/java.svg'} alt='java'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/html-5.svg'} alt='html'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/css-3.svg'} alt='css'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/c-plusplus.svg'} alt='cpp'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/knex.svg'} alt='knex'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/postgresql.svg'} alt='psql'/>
            </Gallery>
            <ul>
              <li>JS (Web and backend Node)</li>
              <li>Java</li>
              <li>HTML, CSS</li>
              <li>C++</li>
              <li>SQL (PostgreSQL, KnexJS)</li>
            </ul>

            <h3>Environments</h3>
            <Gallery width={50}>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/react.svg'} alt='react'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/eslint.svg'} alt='eslint'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/ava.svg'} alt='ava'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/codeclimate-logo.svg'} alt='codeclimate'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/codecov-icon.svg'} alt='codecov'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/github-actions.svg'} alt='actions'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/circleci.svg'} alt='circleci'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/github-icon.svg'} alt='github'/>
              <img src={data.api.cdn + '/gilbarbara/logos/master/logos/visual-studio-code.svg'} alt='vscode'/>
            </Gallery>
            <ul>
              <li>Frontend (React, HTML, CSS, UI/UX design)</li>
              <li>Backend (REST)</li>
              <li>Middleware (SQL databases)</li>
              <li>Server structure (Express, Polka)</li>
              <li>Unit testing (Ava, Sinon, NYC, Lcov, Codecov, CodeClimate)</li>
              <li>CI (CircleCI, Github Actions)</li>
              <li>Product design</li>
            </ul>

            <p>In terms of designing product logos and banners, I enjoy making and rendering them in-browser via HTML & CSS</p>

            <Gallery>
              <img src={`${data.api.cdn}/${data.api.user}/react-fluent-mobile/master/assets/banner.png`} alt='fluent-mobile'/>
              <img src={cycloneBanner} alt='cyclone-engine'/>
              <img src={profileBanner} alt='cyclone-engine'/>
            </Gallery>
          </div>

          <div className='subsection' id='career'>
            <h1>What do you do?</h1>

            <p>I am a fullstack engineer. In one project, I can</p>

            <ul>
              <li>Design, structure, and write the backend</li>
              <li>Set up and link the middleware</li>
              <li>Design and write the frontend</li>
              <li>Write tests</li>
              <li>Design and set up continuous integration</li>
            </ul>

            <p>Although currently a student, I am also the technical manager
              at <a href='https://studylogic.com' target='_blank' rel='noreferrer'>STUDYLOGIC</a> and
              engage in freelance work as well</p>
          </div>

          <div className='subsection' id='vision'>
            <h1>What are you looking for?</h1>

            <p>Currently, I am pursuing an undergraduate's degree in computer science. However, I am open to freelance work if
              the work required is within my capability</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
