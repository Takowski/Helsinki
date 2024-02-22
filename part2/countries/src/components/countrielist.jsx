const Countrielist = ({ filteredCountries, setSearch }) => {
  const showCountry = (country) => {
    console.log(country.name.common)
    setSearch(country.name.common)
  }

  switch (true) {
    case filteredCountries.length > 10:
      return <p>Too many matches, specify another filter</p>;

    case filteredCountries.length > 1:
      return (
        <div>
          {filteredCountries.map((country, index) => (
            <div key={index}>
              <p>{country.name.common}</p>
              <button onClick={() => showCountry(country)}>Show</button>
            </div>
          ))}
        </div>
      )

    case filteredCountries.length === 1:
      const country = filteredCountries[0]
      return (
        <div>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital[0]}</p>
          <p>Area: {country.area} square km</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(country.languages).map(language => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
        </div>
      );

    default:
      return <p>No matches found</p>
  }
}
export default Countrielist
