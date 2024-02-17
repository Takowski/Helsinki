import data from '../services/data'

const Numbers = ({ name, number, id, setPersons, persons }) => {
    const handleDelete = () => {
        data.deletePhoneBook(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
            })
            .catch(error => {
                console.error('Error deleting person:', error);
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