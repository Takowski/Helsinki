import { useState,useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import data from './services/data'
import Notification from './components/Notifications'
import '/index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('add number')
  const [search,setSearch] = useState('')
  const [notification,setNotification]=useState(null)

  const hook =()=>{
    console.log('effect');
    data
    .getPhoneBook()
    .then(response=>{
      console.log('promise fulfilled')
      setPersons(response.data)

    })
  }
  useEffect(hook,[])
  
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
const handleSearchChange = (e) => {
  console.log(e.target.value);
  setSearch(e.target.value)
}




  return (
    <div>
      <h2>Phonebook</h2>
      <Notification 
            message={notification ? notification.message : null} 
            className={notification ? notification.type : null} 
        />
      <Filter persons={persons} search={search} handleSearchChange={handleSearchChange}/>
      <h2>add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} persons={persons} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber} setNotification={setNotification}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} setPersons={setPersons} setNotification={setNotification} />
    </div>
  )
}

export default App