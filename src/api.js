import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'
import hooks from 'feathers-hooks'
const socket = io('http://localhost:3030') // DEVELOPMENT
// const socket = io('https://domoo-api.herokuapp.com/') // HEROKU PRODUCTION
const storage = process.env.TYPE = 'CLIENT' ? window.localStorage : null

const api = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ storage }))

export const bonds = api.service('bonds')

export default api
