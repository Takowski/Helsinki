import data from '../services/data'

const Numbers = ({ name, number, id, setPersons, persons,setNotification }) => {
    const handleDelete = () => {
        data.deletePhoneBook(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
            })
            .catch(error => {
                console.error('Error deleting person:', error)
                setNotification({
                    message: `Information of ${name} has already been removed from server`,
                    type: 'error'
                })
                setTimeout(()=>{setNotification(null)},5000)

                // You can also display an error message to the user here
            })
    }

    return (
        <li>{name}{number}
            <button onClick={handleDelete} >Delete</button>
        </li>
    )
}

export default Numbers