import Numbers from "./numbers"

const Persons = ({persons }) => {
    return (

      <div>
      
        {persons.map(person => <Numbers key={person.id} name={person.name} number={person.number} />)}
      
    </div>
    )
  }

  export default Persons