import React from 'react'

import api from './api.js'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false,
      errorMessage: '',
      exito: false
    }
    this.handleConect = this.handleConect.bind(this)
  }
  async handleConect (event) {
    event.preventDefault()

    const username = document.getElementById('username').value

    const password = document.getElementById('password').value

    if (username.length === 0 || password.length === 0) {
      // faltan datos
      this.setState({
        error: 503,
        errorMessage: 'Faltan datos'
      })
    } else {
      const respuesta = await api.users.postLogin(username, password, this.props.urlRequest)

      switch (respuesta) {
        case 200:
          this.setState({
            exito: true,
            error: false
          })
          console.log('se conecto')
          break
        case 403:
          this.setState({
            error: respuesta,
            errorMessage: 'No autorizado'
          })
          console.log('No autorizado')
          break
        case 404:
          this.setState({
            error: respuesta,
            errorMessage: 'Problema al iniciar sesión'
          })
          console.log('Problema al iniciar sesion')
          break
        case 501:
          this.setState({
            error: respuesta,
            errorMessage: 'Problemas en el servidor'
          })
          console.log('Problemas en el servidor')
          break
        case 502:
          this.setState({
            error: respuesta,
            errorMessage: 'Servidor Colapsado'
          })
          console.log('Servidor Colapsado')
          break
        default:
          this.setState({
            error: respuesta,
            errorMessage: 'Bad Request'
          })
          console.log('Bad Request')
      }
    }
  }
  render () {
    return (
      <div className='box-login'>
        {this.state.error && (
          <p className='error'>{this.state.errorMessage}</p>
        )}
        {!this.state.exito && (
          <form>
            <p>
              <label name='user'>Nombre Usuario</label>
              <input type='text' id='username' autoFocus name='user' required />
            </p>
            <p>
              <label name='pass'>Clave</label>
              <input type='password' id='password' name='pass' required />
            </p>
            <p className='texto-centrado'>
              <button onClick={this.handleConect}>Conectar</button>
              <button onClick={this.props.closeModal}>Cerrar</button>
            </p>
          </form>
        )}
        {this.state.exito && (
          <div className='texto-centrado'>
            <h2>Login Exitoso!!</h2>
            <button autoFocus onClick={this.props.closeModal}>Cerrar</button>
          </div>
        )}
      </div>
    )
  }
}
