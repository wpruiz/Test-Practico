import axios from 'axios'

export const Pettions = async ( req:string ) => {
    const urlAPI = "http://localhost:8000/api/items"
    try {
        return await axios.get(`${urlAPI}${req}`)
    } catch (error) {
        return error
    }
}