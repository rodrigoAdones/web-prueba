import React from 'react'

export default class AboutApp extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='imagen-conexion'>
        <a href='#' className='wrapper'>
          <img src={this.props.imageUrl} className='imagen-borde-suave' />
          <p className='texto'>{this.props.texto}</p>
        </a>
      </div>
    )
  }
}
