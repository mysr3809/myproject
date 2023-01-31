import React, { useEffect, useState, useContext } from 'react'
import "./CountryHome.css"
import CountryPhotos from './CountryPhotos';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import heartAdd from '../assets/heart-regular.svg'
import heartRemove from '../assets/heart-solid.svg'
import { FavoriteContext } from '../context/FavoriteContext';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import NavBar from './NavBar';
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

const CountryHome = () => {
  const [countryData, setCountryData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [countryName, setCountryName] = useState('');
  const [flag, setFlag] = useState(null) //used flex to control fetch photos depend on search input 
  const { favorite, addFavorite, removeFavorite } = useContext(FavoriteContext);
  const [isLoading, setIsLoading] = useState(false);


  const isFavorite = (countryName) => {
    return favorite.some((countryInfo) => countryInfo.name === countryName);
  }

  const getData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
      const data = await response.json();
      console.log("data", data)
      setCountryData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    if (inputValue) {
      setIsLoading(true)
      setCountryName(inputValue);
      setTimeout(() => {
        getData();
        setIsLoading(false);
      }, 1000);
      setFlag(true);
    }
  }

  const handleOnChange = (e) => {
    e.preventDefault();
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
        <h2 className='siteInfo'><span>DON'T TRAVEL WITHOUT</span><br></br> <span>TRAVELLER</span></h2>
        <div className='box'>
          <div className='input'>
            <Input placeholder='Country Name' color="primary" type="text" name="name" onKeyDown={handleKeyDown} onChange={(e) => handleOnChange(e)} />
            <Button href='#countryInfo' className='searchBtn' onClick={handleClick}>Search</Button>
            {isLoading &&
              <LinearProgress className="loadingIcon" sx={{ display: 'flex' }}>
                <CircularProgress />
              </LinearProgress>}
          </div>
        </div>
        <Container fixed>
          {countryData.status ? <Alert className='alertBox' severity="error">Please Write a Correct Country Name!</Alert> :
            <div className='mainInfoDiv' id='mainInfoDiv'>
              <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>COUNTRY INFORMATION</h3>
              {!isLoading &&
                <div className='countryInfo' id='countryInfo'>
                  <div className='infoLeft'>
                    {countryData.length > 0 && (<div className='leftContent'>
                      <div className='imgContent'>
                        {!isFavorite(countryName) ?
                          <img className="icon" src={heartAdd} alt={heartAdd} onClick={(country) => addFavorite(countryName, countryData[0].flags.png)} />
                          :
                          <img className="icon" src={heartRemove} alt={heartAdd} onClick={() => removeFavorite(countryName)} />
                        }
                        <Link to={`/country/${countryData[0].altSpellings[0]}`}>
                          <img className='countryFlag' src={countryData[0].flags.png} alt="flag" />
                        </Link>
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
              }

            </div>
          }

        </Container>
      </div>
    </div>
  );
};


export default CountryHome