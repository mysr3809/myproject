import React, { useState, useContext, useEffect } from 'react'
import "./Favorites.css";
import { FavoriteContext } from '../context/FavoriteContext';

const Favorites = () => {
  const { favorite } = useContext(FavoriteContext);
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    const getFlag = async (country) => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
      const data = await response.json();
      if (!flag.includes(data[0].flags.png)) {
        setFlag((prev) => [...prev, data[0].flags.png])
      }
    }
    favorite.map((country) => {
      return getFlag(country)
    })
  }, [])

  return (
    <div>
      <h2>Here is the Favorites</h2>
      {favorite.map((fav) => {

      })}
    </div>
  )
}

export default Favorites
