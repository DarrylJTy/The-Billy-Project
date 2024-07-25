const SERVER_HOSTNAME = process.env.GATSBY_SERVER_URL || 'http://localhost'
const SERVER_PORT = process.env.VITE_SERVER_PORT || '8001'

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

export default SERVER;