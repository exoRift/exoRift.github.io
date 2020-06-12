import React from 'react'
import PropTypes from 'prop-types'

class Scroller extends React.Component {
  static propTypes = {
    doms: PropTypes.array
  }

  constructor (props) {
    super(props)

    this.state = {
      active: props.doms[0].short
    }
  }

  render () {
    return (
      <div id='scroller'>
        <div className='scroll-container'>
          {this.props.doms.map((d, i) => (
            <div className='scroll' key={i} active={this.state.active === d.short ? 'true' : 'false'} onClick={() => this.clickFunction(d.short)}>
              <span>{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  clickFunction (name) {
    const app = document.getElementById('app')
    const bounds = document.getElementsByClassName(name)[0].getBoundingClientRect()

    app.scroll({
      top: bounds.top - app.getBoundingClientRect().top,
      behavior: 'smooth'
    })

    this.setState({
      active: name
    })
  }
}

export default Scroller
