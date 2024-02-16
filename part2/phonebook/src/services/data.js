import axios from 'axios'

const baseUrl= 'http://localhost:3001/persons'

const getPhoneBook =() => {
    return axios.get(baseUrl)
}

const postPhoneBook= numberObject => {
    return axios.post(baseUrl,numberObject)
}

const deletePhoneBook= (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getPhoneBook,
    postPhoneBook,
    deletePhoneBook 
   
}