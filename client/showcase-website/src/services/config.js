const PRODUCTION = process.env.GATSBY_PRODUCTION || false
const SERVER_HOSTNAME = process.env.GATSBY_SERVER_URL || 'http://localhost'
const SERVER_PORT = process.env.VITE_SERVER_PORT || '8001'

const SERVER = {
    hostname: PRODUCTION ? `${SERVER_HOSTNAME}` : `${SERVER_HOSTNAME}:${SERVER_PORT}`,
}

export default SERVER;