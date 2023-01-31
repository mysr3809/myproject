import React, { useEffect, useState, useContext } from 'react'
import "./CountryHome.css"
import CountryPhotos from './CountryPhotos';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import heartAdd from '../assets/heart-regular.svg'
import heartRemove from '../assets/heart-solid.svg'
import { FavoriteContext } from '../context/FavoriteContext';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Container from "@mui/material/Container"
// import OutlinedCard from './OutlinedCard';

const CountryHome = () => {
  const [countryData, setCountryData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [countryName, setCountryName] = useState('');
  const [flag, setFlag] = useState(null) //used flex to control fetch photos depend on search input 
  const { favorite, addFavorite, removeFavorite } = useContext(FavoriteContext)

  const isFavorite = (countryName) => {
    return favorite.some((countryInfo) => countryInfo.name === countryName);
  }

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
    if (inputValue) {
      setCountryName(inputValue);
      getData();
      setFlag(true);
    }
  }

  const handleOnChange = (e) => {
    e.preventDefault();
    // setCountryName(e.target.value);
    setInputValue(e.target.value.toLowerCase());
    setFlag(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div>
      <NavBar />
      <div>
        <div className='box'>
          <div className='input'>
            <Input placeholder='Country Name' color="primary" type="text" name="name" onKeyDown={handleKeyDown} onChange={(e) => handleOnChange(e)} />
            <Button href='#countryInfo' className='searchBtn' onClick={handleClick}>Search</Button>
          </div>
        </div>
        {/* <OutlinedCard name={countryData[0].altSpellings[1]} capital={countryData[0].capital} region={countryData[0].region} population={countryData[0].population} location={countryData[0].maps.googleMaps} image={countryData[0].flags.png}/> */}
        <Container fixed>
          <div className='mainInfoDiv' id='mainInfoDiv'>
            <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>COUNTRY INFORMATION</h3>
            <div className='countryInfo' id='countryInfo'>
              <div className='infoLeft'>
                {countryData.length > 0 && (<div className='leftContent'>
                  <div className='imgContent'>
                    {!isFavorite(countryName) ?
                      <img className="icon" src={heartAdd} alt={heartAdd} onClick={(country) => addFavorite(countryName, countryData[0].flags.png)} />
                      :
                      <img className="icon" src={heartRemove} alt={heartAdd} onClick={() => removeFavorite(countryName)} />
                    }
                    <img className='countryFlag' src={countryData[0].flags.png} alt="flag" />
                  </div>
                  <div className='leftInfo'>
                    <h4>Name : {countryData[0].altSpellings[1]}</h4>
                    <h4>Capital : {countryData[0].capital}</h4>
                    <h4>Region : {countryData[0].region}</h4>
                    <h4>Population : {countryData[0].population}</h4>
                    <h4>Location : <a target="_blank" href={countryData[0].maps.googleMaps} rel="noreferrer">{countryData[0].altSpellings[2]} Location</a> </h4>
                    <Link to={`/country/${countryData[0].altSpellings[0]}`}>
                      <Button variant="contained">Read Travel Detail</Button>
                    </Link>
                  </div>
                </div>)}
              </div>
              <div className='infoRight'>
                {flag &&
                  <>
                    <CountryPhotos inputValue={inputValue} />
                  </>}
              </div>
            </div>

          </div>
        </Container>

      </div>

    </div>
  );
};


export default CountryHome