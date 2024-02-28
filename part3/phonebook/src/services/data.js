import axios from 'axios'

const baseUrl= 'api/persons'

const getPhoneBook =() => {
    console.log(baseUrl)
    return axios.get(baseUrl)
    
}

const postPhoneBook= numberObject => {
    return axios.post(baseUrl,numberObject)
}

const deletePhoneBook= (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePhoneBook= (id,numberObject) => {
    return axios.put(`${baseUrl}/${id}`,numberObject)
}

export default {
    getPhoneBook,
    postPhoneBook,
    deletePhoneBook,
    updatePhoneBook
   
}