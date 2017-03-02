import fetch from 'isomorphic-fetch'

const baseUrl = 'http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend'

// Usando funciones asincronas y promesas, se hara la peticion al servicio para que valida al usuario

const api = {
  users: {
    async postLogin (username = 'fake', password = 'nuncaseralapass', url = baseUrl) {
      var formData = new FormData()

      formData.append('username', username)
      formData.append('password', password)

      const respuesta = await fetch(url, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.status
      })
        .catch(function (error) {
          console.log('Request failed', error)
          return 503
        })

      return respuesta
    }
  }
}

export default api
