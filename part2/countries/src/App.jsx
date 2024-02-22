import { useState, useEffect } from "react"
import SearchBar from "./components/search"
import Countrielist from "./components/countrielist"
import data from "./services/data"



function App() {
  const [search, setSearch] = useState("")
  const [countries, SetCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [weather, setWeather] = useState(null)

  const HandleSearchChange = (e) => {
    setSearch(e.target.value)
    console.log(search)

  }
  useEffect(() => {
    data.GetCountries(SetCountries)
  }, [])


  useEffect(() => {
    setFilteredCountries(
      countries
        .filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, countries])

  useEffect(() => {
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      const capital = country.capital[0]
      data.GetWeather(capital,setWeather)
    }
  }, [filteredCountries]);

  return (
    <div>

      <SearchBar search={search} HandleSearchChange={HandleSearchChange} />
      <Countrielist filteredCountries={filteredCountries} setSearch={setSearch} weather={weather} />

    </div>
  )
}

export default App
