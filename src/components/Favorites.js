import React, { useState, useContext, useEffect } from 'react'
import "./Favorites.css";
import { FavoriteContext } from '../context/FavoriteContext';
import heartAdd from '../assets/heart-solid.svg';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const Favorites = () => {
  const { favorite, removeFavorite } = useContext(FavoriteContext);
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    const getFlag = async (country) => {
      setFlag([]);
      const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await response.json();
      if (!flag.includes(data[0].flags.png)) {
        setFlag((prev) => [...prev, data[0].flags.png])
      }
    }
    if (favorite.length > 0) {
      favorite.map((country) => {
        return getFlag(country.name)
      })
    }
  }, [])

  return (
    <div className='favContent'>
      <div className='favHeader'>
        <Link to="/">
          <Button className='homeBtn' variant="contained">Go Home</Button>
        </Link>
        <h2>Here is the Favorites</h2>
      </div>
      {favorite.length === 0 ? <span className='favText'>There is no Favorite Country.</span> :
        <div className='favCountries'>
          {favorite.map((fav, index) => {
            return <div className='favCountry' key={index}>
              <img className="icon" src={heartAdd} alt={heartAdd} onClick={() => removeFavorite(fav.name)} />
              <img className="favFlag" src={fav.flag} alt={flag} />
              <h2>{fav.name.toUpperCase()}</h2>
            </div>
          })}</div>
      }
    </div>
  )
}

export default Favorites
