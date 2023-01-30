import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import CountryHome from './CountryHome';

const RandomCountry = () => {
  const [allCountry, setAllCountry] = useState([]);
  const [randomNum, setRandomNum] = useState([]);


  const getData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setAllCountry(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    getData()
    console.log(Math.floor(Math.random() * allCountry.length))
    // setRandomNum({ allCountry.length) })

  }
  return (
    <div>
      <Button className='searchBtn' onClick={handleClick}>Search</Button>
      {/* <CountryHome randomNum={randomNum} /> */}
    </div>
  )
}

export default RandomCountry
