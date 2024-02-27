import axios from 'axios'
import data from '../services/data'

const PersonForm = ({ newName, newNumber, persons, setPersons, setNewName, setNewNumber, handleNameChange, handleNumberChange, setNotification }) => {
  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      number: newNumber,
      id: newNumber + Math.floor(Math.random() * 1000)

    }
    const nameAlreadyExist = persons.find(person => person.name === numberObject.name)

    nameAlreadyExist
      ? nameAlreadyExist.number !== numberObject.number
        ? window.confirm(`${nameAlreadyExist.name} is already added to the phonebook, replace the old number with a new one?`)
          ? data
            .updatePhoneBook(nameAlreadyExist.id, numberObject)
            .then(response => {
              setPersons(persons.map(person => person.id !== nameAlreadyExist.id ? person : response.data))
              setNewName('')
              setNewNumber('')
              setNotification({
                message: `The phone number of ${numberObject.name} was modified succesfully`,
                type: 'success'
              })
              setTimeout(() => { setNotification(null) }, 5000)
              console.log('button clicked', event.target)
            })
          : console.log('Update cancelled')
        : alert(`${numberObject.name} is already added to phonebook`)
      : data
        .postPhoneBook(numberObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(numberObject))
          setNewName('')
          setNewNumber('')
          setNotification({
            message: `${numberObject.name} was succesfully added !`,
            type: 'success'
        });
          setTimeout(() => { setNotification(null) }, 5000)
          console.log('button clicked', event.target)
        })

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