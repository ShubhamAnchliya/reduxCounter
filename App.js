import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [countries, setCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");
  // const [cities, setCities] = useState(null);
  const [cities, setCities] = useState([]);
  const [singleCity, setSingleCity] = useState("");
  // const [submit, setSubmit] = useState(false);
  const [submit, setSubmit] = useState("");


  const fetchCountries = async () => {

    try {

      const country = await axios.get("https://countriesnow.space/api/v0.1/countries");
      setCountries(country.data.data);
      console.log( "setCountries" , country.data.data);

    } catch (error) {

      console.log(error);
      
    }
    
  };

  const fetchCities = (country) => {

    setSubmit(false);
    setSingleCity(null);


    setSingleCountry(country);

    console.log("setSingleCountry" , country);

    const findCities = countries.find((c) => c.country ===  country );

      setCities(findCities.cities);

      console.log("setCities",  findCities.cities);

    
    
  };



  useEffect(() => {

    fetchCountries();
    
  
  }, []);

  const onSubmit = () => {

    if(singleCountry && singleCity) {
      setSubmit(true);

      console.log("singleCountry", singleCountry  );
      console.log("SingleCity", singleCity  );

    }
    
  };



  return (

    <>
      <div className='mainDiv container'>

          <h1>Select Country , City</h1>

          <div className='countrySelector w-50 mt-5 mx-auto'>

          {
            countries && (

              <div className="form-group">

                  <label htmlFor="">Country</label>

                  <select 
                    name="country"
                    className="form-control btn btn-light select-country mt-2"
                    id="selectCountry" 
                    onChange={(e) => fetchCities(e.target.value)}
                    value={singleCountry} 
                   >
                  
                    <option>
                      Select Country
                    </option>

                    {
                      countries.map((country) => (
                        <option key={`${country.country}`} value={country.country} >

                          {country.country}

                        </option>
                      ))
                    }

                  </select>

              </div>

            )
          }

            {/* 
            <div className="form-group">
                <label htmlFor="">State</label>
                <select name="state" className="form-control btn btn-light select-state" id="selectState"></select>
            </div> */}

            {
              cities && (

                <div className="form-group mt-2">

                    <label htmlFor="">City</label>

                    <select 
                      name="city"
                      className="form-control btn btn-light select-city mt-2" 
                      onChange={(e) => setSingleCity(e.target.value)}
                      value={singleCity}
                      id="selectCity"
                    >

                      <option>
                        Select City
                      </option>

                      {cities.map((city) => (
                        <option value={city} key={city}>
                          {city}
                        </option>
                      ))

                      }

                    </select>

                </div>

            )}

            <button  className='submitbtn btn btn-primary mt-3' onClick={onSubmit} >Submit</button>

          </div>
        

          { submit && (
            <h3 className='headingC mt-3'>Selected country is  {singleCountry}  and city is {singleCity} </h3>
          )}


      </div>
      
    </>
  )
}

export default App;