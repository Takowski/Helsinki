import { useState } from 'react'

const Numbers = ({ name }) => {
  return (
    <li>{name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('new name')

  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName
    }
    const alreadyExist = persons.some(person => person.name === numberObject.name)
    alreadyExist
      ? alert(`${numberObject.name} is already added to phonebook `)
      :
      setPersons(persons.concat(numberObject))
    setNewName('')
    console.log('button clicked', event.target)
  }
  const HandleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form
        onSubmit={addNumber} >
        <div>
          <input
            value={newName}
            onChange={HandleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => <Numbers key={person.name} name={person.name} />)}
        </ul>
      </div>
    </div>
  )
}

export default App