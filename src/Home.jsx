import React from 'react'
import {
  Link
} from 'react-router-dom'
import Markdown from 'react-markdown'

import Scroller from './modules/Scroller.jsx'

import './styles/Home.css'

import data from './util/data.json'
import contacts from './util/contacts.json'
import about from './assets/about.md'

const birthday = new Date('9/06/2004')

const mdVars = {
  AGE: () => new Date().getFullYear() - birthday.getFullYear(),
  CAREERLENGTH: () => mdVars.AGE() - 10
}

function inject (markdown) {
  for (const variable in mdVars) markdown = markdown.replace(new RegExp(`{{${variable}}}`, 'g'), mdVars[variable]())

  return markdown
}

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      aboutContent: ''
    }

    document.title = props.title + ' - Home'
  }

  render () {
    const sections = [
      {
        name: 'Pinned Projects',
        short: 'pins',
        value: (
          <>
            <div className='featured'>
              {data.pinned.map((p, i) => (
                <Link className='card' to={{
                  pathname: '/projects',
                  hash: '#' + p
                }} key={i}>
                  <img alt={p} src={`${data.cdn}/${data.user}/${p}/master/assets/Splash.png`}/>
                </Link>
              ))}
            </div>
          </>
        )
      },
      {
        name: 'About',
        short: 'about',
        value: (
          <>
            <h1>About me</h1>
            <h6>Who am I?</h6>

            <Markdown source={inject(this.state.aboutContent)}/>
          </>
        )
      },
      // {
      //   name: 'Prior Experience',
      //   short: 'experience',
      //   value: (
      //     <>
      //       <h1>Prior Experience</h1>
      //     </>
      //   )
      // },
      // {
      //   name: 'Interests',
      //   short: 'interests',
      //   value: (
      //     <>
      //       <h1>Interests</h1>
      //       <h6>Wage, fields, conditions</h6>
      //     </>
      //   )
      // },
      {
        name: 'Contact',
        short: 'contacts',
        value: (
          <>
            <h2>Contact</h2>
            <h5><i>Currently not open for commissions or requests</i></h5>

            <div className='contact-container'>
              {contacts.map((c, i) => (
                <a href={c.link} target='_blank' rel='noopener noreferrer' className={'contact ' + c.name} key={i}>
                  <div className='title'>
                    <img alt={c.name} src={c.icon}/>
                    <span>{c.name}</span>
                  </div>

                  <span className='value'>{c.value}</span>
                </a>
              ))}
            </div>
          </>
        )
      }
    ]

    return (
      <div className='homepage'>
        <Scroller doms={sections.map((s) => {
          return {
            ...s,
            short: 'section ' + s.short
          }
        })}/>

        <div className='section-container'>
          {sections.map((s, i) => (
            <div className={'section ' + s.short} key={i}>
              {s.value}
            </div>
          ))}
        </div>
      </div>
    )
  }

  componentDidMount () {
    fetch(about)
      .then((res) => res.text())
      .then((aboutContent) => this.setState({
        aboutContent
      }))
  }
}

export default Home
