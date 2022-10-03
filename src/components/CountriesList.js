import React from 'react';
import {Link} from 'react-router-dom';



function CountriesList(props) {
    
    

    
    

    const countriesList = props.countries;
    console.log(countriesList);
    return (
        <div className="col-5" style={{
            maxHeight: "90vh", 
            overflow: "scroll",
        }}>
            <div className="list-group">
                {countriesList.map(country => {
                    const flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
                    return (
                        <div>
                        <Link to= {`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                                <img src={flag} height={30} alt="flagImage"/>
                                {country.name.common}
                        </Link>
                        </div>
                    );
                })}
            </div>
        </div>
                
    );
}

export default CountriesList;