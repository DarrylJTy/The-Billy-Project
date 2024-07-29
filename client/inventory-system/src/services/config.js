
const PRODUCTION = import.meta.env.VITE_PRODUCTION || false
const SERVER_HOSTNAME = import.meta.env.VITE_SERVER_URL || 'http://localhost'
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT || '8001'

const SERVER = {
    hostname: PRODUCTION ? `${SERVER_HOSTNAME}` : `${SERVER_HOSTNAME}:${SERVER_PORT}`,
}

export default SERVER;