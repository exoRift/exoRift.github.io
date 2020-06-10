import React from 'react'
import Markdown from 'react-markdown'

import './styles/Home.css'

import data from './util/data.json'
import contacts from './util/contacts.json'
import about from './assets/about.md'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      // pinned: [],
      activeScroller: 'pins',
      aboutContent: ''
    }
  }

  componentDidMount () {
    // for (const repo of data.pinned) {
    //   fetch(`${data.endpoint}/repos/${data.user}/${repo}`)
    //     .then((res) => res.json())
    //     .then((json) => this.setState({
    //       pinned: [...this.state.pinned, json]
    //     }))
    // }

    fetch(about)
      .then((res) => res.text())
      .then((aboutContent) => this.setState({
        aboutContent
      }))
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
                <a className='card' href={'/projects/' + p} key={i}>
                  <img alt={p} src={`${data.cdn}/${data.user}/${p}/master/assets/Splash.png`}/>
                </a>
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

            <Markdown source={this.state.aboutContent}/>
          </>
        )
      },
      {
        name: 'Contact',
        short: 'contacts',
        value: (
          <>
            <h2>Contact</h2>
            <h5>Currently not open for commissions or requests</h5>

            <div className='contact-container'>
              {contacts.map((c, i) => (
                <div className='contact' key={i}>
                  <div className='title'>
                    <img alt={c.name} src={c.icon}/>
                    <h3>{c.name}</h3>
                  </div>

                  <a href={c.link}>{c.value}</a>
                </div>
              ))}
            </div>
          </>
        )
      }
    ]

    return (
      <div className='homepage'>
        <div className='scroller'>
          {sections.map((s, i) => (
            <div className='scroll' key={i} active={this.state.activeScroller === s.short ? 'true' : 'false'} onClick={() => clickFunction(s, this)}>
              <span>{s.name}</span>
            </div>
          ))}
        </div>

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
}

function clickFunction (section, component) {
  const bounds = document.getElementsByClassName('section ' + section.short)[0].getBoundingClientRect()

  window.scroll({
    top: bounds.top,
    behavior: 'smooth'
  })

  component.setState({
    activeScroller: section.short
  })
}

export default Home
