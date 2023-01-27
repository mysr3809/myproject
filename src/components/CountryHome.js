import React, { useEffect, useState } from 'react'
import "./CountryHome.css"
import CountryInfo from "./CountryInfo";
import CountryPhotos from './CountryPhotos';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Button2 from 'react-bootstrap/Button';




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
          <Button className='searchBtn' onClick={() => getData()}>Search</Button>
        </div>
        <div className='countryInfo'>
          <div className='infoLeft'>
            <h2>Country Information</h2>
            {countryData.length > 0 && (<div className='leftContent'>
              <img src={countryData[0].flags.png} alt="flag" />
              <div className='leftInfo'>
                <h3>Name : {countryData[0].altSpellings[2]}</h3>
                <h3>Capital : {countryData[0].capital}</h3>
                <h3>Region : {countryData[0].region}</h3>
                <h3>Population : {countryData[0].population}</h3>
                <h3>Location : <a target="_blank" href={countryData[0].maps.googleMaps} rel="noreferrer">{countryData[0].altSpellings[2]} Location</a> </h3>
              </div>
            </div>)}
          </div>
          <div className='infoRight'>
            <h2>Country Photos</h2>
            <CountryPhotos />
          </div>
        </div>
      </div>
    </div>
  );
};


export default CountryHome
