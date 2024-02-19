import Numbers from "./Numbers"

const Persons = ({persons, search,setPersons,setNotification}) => {
  console.log('Persons:', persons);
  console.log('Search:', search);

  if (!persons || persons.length === 0) {
      return <p>No persons to display.</p>;
  }

  if (search === "") {
      return (
          <div>
              {persons.map(person => <Numbers key={person.id} name={person.name} number={person.number} id={person.id} setPersons={setPersons} persons={persons} setNotification={setNotification}/>)}
          </div>
      );
  } else {
      const filteredPersons = persons.filter(person => person.name && person.name.toLowerCase().startsWith(search && search.toLowerCase()));
      if (filteredPersons.length === 0) {
          return <p>No persons match the search criteria.</p>;
      }
      return (
          <div>
              {filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
          </div>
      );
  }
}
  export default Persons