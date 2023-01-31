import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FavoriteContext } from '../context/FavoriteContext';
import logo from "../assets/logo.png"

const NavBar = () => {

  const { favorite } = useContext(FavoriteContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "white" }} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className='logo' style={{ width: "130px" }} src={logo} alt="logo" />
          </Typography>
          <Link to="/favorites">
            <Button variant="contained">
              Favorite Country={favorite.length}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;