import React, { useState, createContext } from 'react'

export const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addFavorite = (countryName, flag) => {
    setFavorite([...favorite, { name: countryName, flag: flag }])
  }
  const removeFavorite = (countryName) => {
    setFavorite(favorite.filter((fav) => fav.name !== countryName))
  }

  return (
    <FavoriteContext.Provider value={{ favorite, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

