import React from 'react'

import './styles/NotFound.css'

class NotFound extends React.Component {
  render () {
    return (
      <div className='page notfound'>
        <div className='message'>Could not find the page you're looking for</div>
      </div>
    )
  }
}

export default NotFound
