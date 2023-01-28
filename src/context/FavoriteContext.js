import React, { useState, createContext } from 'react'

export const FavoriteContext = createContext()


export const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const addFavorite = (countryName) => {
    setFavorite([...favorite, countryName])
  }
  const removeFavorite = (countryName) => {
    setFavorite(favorite.filter((fav) => fav !== countryName))
  }

  return (
    <FavoriteContext.Provider value={{ favorite, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

