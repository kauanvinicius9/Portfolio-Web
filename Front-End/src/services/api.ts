import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// Cliente HTTP Axios
// AXIOS: Framework REACT que permite conexões com Back-End