import React, { useEffect, useState } from 'react'
import "./CountryHome.css"
import CountryInfo from "./CountryInfo";
import CountryPhotos from './CountryPhotos';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';



const CountryHome = () => {
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState("");

  const getData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    setCountryData(data);
  }

  return (
    <div className='homePage'>
      <div className='countryContent'>
        <div className='input'>
          <Input color="primary" type="text" name="name" onChange={(e) => {
            e.preventDefault();
            setCountryName(e.target.value)
          }} />
          <Button onClick={() => getData()}>Search</Button>
        </div>
        <div className='countryInfo'>
          <div className='infoLeft'>
            {/* <CountryInfo countryData={countryData} /> */}
            {countryData.length > 0 && (<div><h2>{countryData[0].area}</h2>
              <img src={countryData[0].flags.png} alt="flag" />
              <h2>{countryData[0].altSpellings[2]}</h2></div>)}

          </div>
          <div className='infoRight'>
            <CountryPhotos />
          </div>
        </div>
      </div>
    </div>
  );
};


export default CountryHome
