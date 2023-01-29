import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CountryHome from "./components/CountryHome";
import Favorites from "./components/Favorites";
import { FavoriteProvider } from './context/FavoriteContext';
import './App.css';


// APIS
// https://www.travel-advisory.info/api
// https://restcountries.com/v3.1/alpha/{TR}
// Weather API


function App() {

  return (
    <div className='bg-opacity'>
      <div className="content">

        <Router>
          <FavoriteProvider>
            <Routes>
              <Route exact path="/" element={<CountryHome />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </FavoriteProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
