import { useState } from 'react'

const Numbers = ({ name,number}) => {
  return (
    <li>{name} {number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
  }
  ])
  const [newName, setNewName] = useState('new name')
  const [newNumber,setNewNumber] = useState('add number')

  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      number: newNumber
    }
    const alreadyExist = persons.some(person => person.name === numberObject.name)
    alreadyExist
      ? alert(`${numberObject.name} is already added to phonebook `)
      :
      setPersons(persons.concat(numberObject))
    setNewName('')
    setNewNumber('')
    console.log('button clicked', event.target)
  }
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) =>{
  setNewNumber(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form
        onSubmit={addNumber} >
        <div>
          <input
            value={newName}
            onChange={handleNameChange}
          />
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => <Numbers key={person.name} name={person.name} number={person.number} />)}
        </ul>
      </div>
    </div>
  )
}

export default App