const Countrielist = ({ filteredCountries }) => {
  switch (true) {
    case filteredCountries.length > 10:
      return <p>Too many matches, specify another filter</p>;

    case filteredCountries.length > 1:
      return (
        <div>
          {filteredCountries.map((country, index) => (
            <p key={index}>{country.name.common}</p>
          ))}
        </div>
      );

    case filteredCountries.length === 1:
      const country = filteredCountries[0];
      return (
        <div>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital[0]}</p>
          <p>Area: {country.area} square km</p>
          <h2>Languages:</h2>
          <ul>
            {Object.values(country.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200" />
        </div>
      );

    default:
      return <p>No matches found</p>;
  }
}
export default Countrielist
