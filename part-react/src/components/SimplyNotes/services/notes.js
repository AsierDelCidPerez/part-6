import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

export const getAll = async () => {
    return await axios.get(baseUrl)
}

export const create = async note => {
    return await axios.post(baseUrl, note)
}