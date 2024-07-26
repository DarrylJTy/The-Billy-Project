
const SERVER_HOSTNAME = import.meta.env.VITE_SERVER_URL || 'http://localhost'
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT || ''

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

export default SERVER;