import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const loadGenres = () => api.get('genres')

const apis = {
    loadGenres: loadGenres
}

export default apis