import React from 'react'
import ReactDOM from 'react-dom'

import Apps from './Apps.jsx'

class App extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (<div className='content' >
      <section className='section1'>
        <div className='row'>
          <div className='caja-inicio col m6 offset-m3'>
            <p>
              <img src='img/icon.png' />
            </p>
            <img src='img/NuncheeInteractive.png' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>
      <Apps />
      <section className='section3' id='seccion-parallax' />
      <footer className='row'><img src='img/NuncheeInteractive White.png' /></footer>
    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('render-section'))
