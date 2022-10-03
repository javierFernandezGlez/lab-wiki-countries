import {useParams} from 'react-router-dom';
import CountriesList from './CountriesList';
import axios from "axios";
import {useEffect, useState} from "react";

import {Link} from "react-router-dom";


function CountryDetails(props) {


    const [country, setCountry] = useState(null);
    const {countryCode} = useParams();
    console.log(countryCode);

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
            .then(answer => {
                setCountry(answer.data);
            })
            .catch(err => console.log(err));
    }, [countryCode])

    

    

    
    
    return (
        <div className="info">
        {country ? (
            
            <div className="col-7">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} height={30} alt="flagImage"/>
                <h1>{country.name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{
                        width: "30%"
                    }}>Capital</td>
                    <td>{country.capital && country.capital[0]}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {country.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country.borders.map(border => {
                                const link = "/"+border;
                                return <li><Link to={link}>{border}</Link></li>;   
                            })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
          </div>
          
        ) : (
            <div>Wait for it</div>
        )}
        </div> 
    );
}


export default CountryDetails;