import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CountryHome from "./components/CountryHome";
import Favorites from "./components/Favorites"
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
          <Routes>
            <Route exact path="/" element={<CountryHome />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
