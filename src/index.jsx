import React from 'react'
import ReactDOM from 'react-dom'

import Apps from './Apps.jsx'

class App extends React.Component {
  constructor () {
    super()
    /* Definicion de un arreglo con las apps que vamos a mostrar */
    /* Agregue la opcion de definir la url del servicio al que se hara login */
    this.state = {
      services: [
        {
          id: 'service1',
          texto: 'Kunga - Actitud Animal',
          classImage: 'imagen-borde-suave',
          imageUrl: 'img/kunga.png',
          serviceUrl: 'http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend'
        },
        {
          id: 'service2',
          classImage: 'imagen-redonda',
          imageUrl: 'img/foto-middle.png',
          serviceUrl: 'http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend'
        },
        {
          id: 'service3',
          texto: 'DirectTV - TV Interactive',
          classImage: 'imagen-borde-suave',
          imageUrl: 'img/directtv.png',
          serviceUrl: 'http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend'
        }
      ]
    }
  }
  render () {
    return (<div className='content' >
      {/* El primer section contiene la imagen de bienvenida, y ya que no tiene ninguna funcionalidad, la deje definida aqui y no cree ningun componente */}
      <section className='section1'>
        <div className='row'>
          <div className='caja-inicio col m6 offset-m3'>
            <div className='logo'>
              <img src='img/icon.png' />
            </div>
            <img src='img/NuncheeInteractive.png' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>
      {/* Para mostrar las apps, se genera un componente al cual se le pasa el listado definido */}
      <Apps listOfServices={this.state.services} />
      {/* Esta es la seccion del parallax, cuyo efecto defini en javascript vanilla, por lo que solo se especifico aquí */}
      <section className='section3' id='seccion-parallax' />
      {/* footer */}
      <footer className='row'><img src='img/NuncheeInteractive White.png' /></footer>
    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('render-section'))
