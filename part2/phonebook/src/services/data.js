import axios from 'axios'

const baseUrl= 'http://localhost:3001/persons'

const getPhoneBook =() => {
    return axios.get(baseUrl)
}

const postPhoneBook= numberObject => {
    return axios.post(baseUrl,numberObject)
}

export default {
    getPhoneBook,
    postPhoneBook 
   
}