import React from 'react'

import './styles/Portfolio.css'

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

          conf manager
        </div>

        <div className='section'>
          <h1>Hobbyist Work</h1>

          fluent (with sb)
          cyclone
          telex
          rfids
          looped space
        </div>
      </div>
    )
  }
}

export default Portfolio
