import React from 'react'

import postFetch from '../util/postFetch.js'
import data from '../util/data.json'

class Project extends React.Component {
  bannerURL = `${data.api.cdn}/${data.api.user}/${this.props.data.name}/master/assets/banner.png`

  render () {
    return (
      <div className='project'>

      </div>
    )
  }
}

class ProjectPane extends React.Component {
  state = {
    projects: []
  }

  componentDidMount () {
    return fetch(`${data.api.endpoint}/users/${data.api.user}/repos`)
      .then(postFetch)
      .then((projects) => projects.json())
      .then((projects) => this.setState({
        projects
      }))
  }

  render () {
    return (
      <div id={this.props.id}>
        <h1>Creations</h1>

        {this.state.projects.map((p, i) => <Project key={i} data={p}/>)}
      </div>
    )
  }
}

export default ProjectPane
