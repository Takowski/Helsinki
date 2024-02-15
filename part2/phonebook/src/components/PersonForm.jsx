import axios from 'axios'

const PersonForm = ({newName, newNumber, persons, setPersons, setNewName, setNewNumber,handleNameChange,handleNumberChange}) => {
const addNumber = (event) => {
  event.preventDefault()
  const numberObject = {
    name: newName,
    number: newNumber,
    // id: newNumber + Math.floor(Math.random() * 1000)
    
  }
axios
.post('http://localhost:3001/persons',numberObject)
.then(response =>{
  console.log(response)
})


  // const alreadyExist = persons.some(person => person.name === numberObject.name)
  // alreadyExist
  //   ? alert(`${numberObject.name} is already added to phonebook `)
  //   :
    setPersons(persons.concat(numberObject))
  setNewName('')
  setNewNumber('')
  console.log('button clicked', event.target)
}
  return (
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
  )
}

export default PersonForm