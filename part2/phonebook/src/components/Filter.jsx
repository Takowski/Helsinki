

const Filter = ({ persons, search, handleSearchChange }) => {
    return (
      <div>
        Filter shown with <input
          value={search}
          onChange={handleSearchChange}
        />
        {search === ""
          ? null
          : persons.filter(person => person.name.toLowerCase().startsWith(search.toLowerCase()))
              .map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }
      </div>
    )
  }
  
  export default Filter;