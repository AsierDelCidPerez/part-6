import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
    return await axios.get(baseUrl)
}

export const createAnec = async content => {
    return (await axios.post(baseUrl, content)).data
}

export const updateAnecWithId = async (id, content) => {
    return (await axios.put(`${baseUrl}/${id}`, content)).data
}