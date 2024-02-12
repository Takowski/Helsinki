import { useState,useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('add number')
  const [search,setSearch] = useState('')

  const hook =()=>{
    console.log('effect');
    axios
    .get('http://localhost:3001/persons')
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
      <Filter persons={persons} search={search} handleSearchChange={handleSearchChange}/>
      <h2>add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} persons={persons} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App