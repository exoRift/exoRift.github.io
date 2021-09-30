import React from 'react'

import './styles/Projects.css'

import globe from './assets/icons/globe.svg'
import repo from './assets/icons/repo.svg'
import { ReactComponent as star } from './assets/icons/star.svg'
import { ReactComponent as eye } from './assets/icons/eye.svg'
import { ReactComponent as fork } from './assets/icons/fork.svg'

import data from './util/data.json'

const nameRegex = /(?:^|[-. ])(.)?/gm

const stats = [
  {
    name: 'stars',
    prop: 'stargazers_count',
    Icon: star
  },
  {
    name: 'watchers',
    prop: 'watchers_count',
    Icon: eye
  },
  {
    name: 'forks',
    prop: 'forks',
    Icon: fork
  }
]

class Projects extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [],
      scrolled: false
    }

    document.title = props.title + ' - Projects'
  }

  render () {
    const mobile = window.innerWidth <= 900

    const projects = this.state.projects
      .filter((p) => !p.fork && !p.name.endsWith('.github.io'))
      .reduce((a, p, i) => {
        const name = p.name
          .replace('-jsdoc', '')
          .replace(nameRegex, (match, param) => (['-', '.', ' '].includes(match[0]) ? ' ' : '') + param.toUpperCase())

        a[i % a.length].push((
          <div className={'project ' + p.name} key={i}>
            <h2 className='name'>{name}</h2>

            <h4 className='description'>{p.description}</h4>

            <div className='data-container'>
              {p.banner_url ? (
                <img alt='splash' src={p.banner_url}/>
              ) : null}

              <div className='stats'>
                {stats.map((s, i) => (
                  <div className={'stat ' + s.name} key={i}>
                    <s.Icon/>

                    <span>{p[s.prop]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='links'>
              <a href={p.html_url} target='_blank' rel='noopener noreferrer' className='link repo' alone={p.homepage ? 'false' : 'true'}>
                <img alt='repository' src={repo}/>
              </a>
              {p.homepage ? (
                <a href={p.homepage} target='_blank' rel='noopener noreferrer' className='link site'>
                  <img alt='website' src={globe}/>
                </a>
              ) : null}
            </div>
          </div>
        ))

        return a
      }, mobile ? [[]] : [[], []])

    return (
      <>
        <h1 className='proj-header'>PROJECTS</h1>

        <div className='project-container' scrolled={this.props.location.hash ? 'false' : 'true'}>
          {projects.map((p, i) => (
            <div className='column' key={i}>
              {p}
            </div>
          ))}
        </div>
      </>
    )
  }

  componentDidMount () {
    fetch(`${data.endpoint}/users/${data.user}/repos`)
      .then((res) => res.json())
      .then((projects) => {
        this.setState({
          projects
        })

        Promise.all(projects.map((p) => {
          const url = `${data.cdn}/${data.user}/${p.name}/master/assets/Splash.png`

          return fetch(url)
            .then((res) => {
              if (res.ok) {
                return {
                  ...p,
                  banner_url: url
                }
              } else return p
            })
        })).then((projects) => {
          this.setState({
            projects
          })
        })
      })

    if (this.props.location.hash) {
      setTimeout(() => {
        const container = document.getElementsByClassName('project-container')[0]

        if (container) container.setAttribute('scrolled', true)
      }, 1500)
    }
  }

  componentDidUpdate () {
    if (this.props.location.hash && !this.state.scrolled) {
      const project = document.getElementsByClassName('project ' + this.props.location.hash.substring(1, this.props.location.hash.length))[0]

      if (project) {
        project.scrollIntoView({ behavior: 'smooth' })
        project.setAttribute('active', 'true')
        setTimeout(() => project.setAttribute('active', 'false'), 600)

        this.setState({
          scrolled: true
        })
      }
    }
  }
}

export default Projects
