import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CountryHome from "./components/CountryHome";
import Favorites from "./components/Favorites";
import GetDetail from './components/GetDetail';
import { FavoriteProvider } from './context/FavoriteContext';
import './App.css';

const App = () => { // with these paths we can define our pages route with url params
  return (
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
  );
}

export default App;
