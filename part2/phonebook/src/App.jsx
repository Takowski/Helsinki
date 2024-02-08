import { useState } from 'react'

const Numbers = ({ name, number }) => {
  return (
    <li>{name} {number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('add number')
  const [search,setSearch] = useState('')

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
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
const handleSearchChange = (e) => {
  console.log(e.target.value);
  setSearch(e.target.value)
}

const filter = search === ""
? persons
: persons.filter(person => person.name.toLowerCase().startsWith(search.toLowerCase()))



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      Filter shown with <input
      value={search}
      onChange={handleSearchChange}
      >

      </input>
      </div>
      <h2>add a new</h2>
      <form
        onSubmit={addNumber} >
        <div>
          Name :<input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <br />
        <div>
          Number : <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {filter.map(person => <Numbers key={person.id} name={person.name} number={person.number} />)}
        </ul>
      </div>
    </div>
  )
}

export default App