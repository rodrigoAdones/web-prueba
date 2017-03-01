import React from 'react'

import AboutApp from './AboutApp.jsx'

export default class Apps extends React.Component {
  render () {
    return (
      <section className='section2'>
        <div className='row'>
          <h3>Nuestras Apps</h3>
          <div className='caja-imagenes'>
            <AboutApp imageUrl='img/kunga.png' texto='Kunga - Actitud Animal' />
            <div className='imagen-conexion'>
              <img src='img/foto-middle.png' className='imagen-redonda' />
            </div>
            <AboutApp imageUrl='img/directtv.png' texto='DirectTV - TV Interactive' />
          </div>
        </div>
      </section>
    )
  }
}
