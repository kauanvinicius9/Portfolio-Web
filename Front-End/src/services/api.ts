import axios from 'axios'

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

// Cliente HTTP Axios
// AXIOS: Framework REACT que permite conexões com Back-End