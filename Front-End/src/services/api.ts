import axios from 'axios'

export const api = axios.create({
    baseURL: "https://back-end.onrender.com",
});

// Cliente HTTP Axios
// AXIOS: Framework REACT que permite conexões com Back-End