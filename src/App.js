import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CountryHome from "./components/CountryHome";
import Favorites from "./components/Favorites";
import GetDetail from './components/GetDetail';
import { FavoriteProvider } from './context/FavoriteContext';
import './App.css';


// APIS
// https://www.travel-advisory.info/api
// https://restcountries.com/v3.1/alpha/{TR}
// Weather API
// https://countryapi.io/api/name/austria?apikey=l4E3hZr0ZZ19CCPpqLhRf6Dsjx4svScxpOKOJ8nU


function App() {

  return (
    <div className='bg-opacity'>
      <div className="content">

        <Router>
          <FavoriteProvider>
            <Routes>
              <Route exact path="/" element={<CountryHome />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/country/:id" element={< GetDetail />} />
            </Routes>
          </FavoriteProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
