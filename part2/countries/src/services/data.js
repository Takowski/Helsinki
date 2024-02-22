import axios from 'axios';

const urlCountries = 'https://studies.cs.helsinki.fi/restcountries/api/all'


const GetCountries = (setAllCountries) => {
    axios.get(urlCountries)
        .then(response => {
            
            setAllCountries(response.data);
            return response;
        })
        .catch(error => {
            console.error(`Error fetching countries: ${error}`);
            return null;
        });
}

const GetWeather = (capital,setWeather) => {
    const api_key = import.meta.env.VITE_SOME_KEY;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
        .then(response => {
            setWeather(response.data)
            console.log(response.data);
        })
        .catch(error => {
            console.error(`Error fetching weather data: ${error}`);
        });
}
export default { GetCountries,GetWeather }