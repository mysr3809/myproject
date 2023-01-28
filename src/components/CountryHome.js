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
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState(true)

  const getData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
      const data = await response.json();
      setCountryData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    getData();
    setFlag(true);

  }

  const handleOnChange = (e) => {
    e.preventDefault();
    // setCountryName(e.target.value);
    setInputValue(e.target.value);
    setFlag(false)
  }

  return (
    <div className='homePage'>
      <div className='countryContent'>
        <div className='input'>
          <Input color="primary" type="text" name="name" onChange={(e) => handleOnChange(e)} />
          <Button className='searchBtn' onClick={handleClick}>Search</Button>
        </div>
        <div className='countryInfo'>
          <div className='infoLeft'>
            <h2>Country Information</h2>
            {countryData.length > 0 && (<div className='leftContent'>
              <img src={countryData[0].flags.png} alt="flag" />
              <div className='leftInfo'>
                <h4>Name : {countryData[0].altSpellings[1]}</h4>
                <h4>Capital : {countryData[0].capital}</h4>
                <h4>Region : {countryData[0].region}</h4>
                <h4>Population : {countryData[0].population}</h4>
                <h4>Location : <a target="_blank" href={countryData[0].maps.googleMaps} rel="noreferrer">{countryData[0].altSpellings[2]} Location</a> </h4>
              </div>
            </div>)}
          </div>
          <div className='infoRight'>
            <h2>Country Photos</h2>
            {flag && <CountryPhotos inputValue={inputValue} getData={getData} />}

          </div>
        </div>
      </div>
    </div>
  );
};


export default CountryHome
