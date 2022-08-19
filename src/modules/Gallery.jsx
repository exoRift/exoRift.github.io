import React from 'react'

import '../styles/Gallery.css'

class Gallery extends React.Component {
  static defaultProps = {
    width: 200,
    radius: 100
  }

  ref = React.createRef()

  componentDidMount () {
    this.ref.current.style.setProperty('--width', this.props.width + 'px')
    this.ref.current.style.setProperty('--radius', this.props.radius + 'px')
    this.ref.current.style.setProperty('--count', this.ref.current.children.length)

    for (let c = 0; c < this.ref.current.children.length; c++) this.ref.current.children[c].style.setProperty('--n', c)
  }

  render () {
    return (
      <div className='gallery' ref={this.ref}>
        {this.props.children}
      </div>
    )
  }
}

export default Gallery
