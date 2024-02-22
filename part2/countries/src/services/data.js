import axios from 'axios';

const urlCountries = 'https://studies.cs.helsinki.fi/restcountries/api/all';

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

export default { GetCountries }