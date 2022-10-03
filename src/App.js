import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
// import countries from './countries.json'

import CountryDetails from './components/CountryDetails';
import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";


function App() {

  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then(answer => {
            setCountries(answer.data);
        })
        .catch(err => console.log(err));
}, []);
  

  return (
    <div className='App'>
      
      <Navbar/>
      <div className='front'>
        <CountriesList countries={countries}/>
      <Routes>
        <Route path="/:countryCode" element={<CountryDetails/>}/>
      </Routes>
      </div>
      
      
      
    </div>
  );
}

export default App;
