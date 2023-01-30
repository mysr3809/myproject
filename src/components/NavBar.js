import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import { Link } from "react-router-dom";
import { FavoriteContext } from '../context/FavoriteContext';
const NavBar = () => {

  const { favorite } = useContext(FavoriteContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "black" }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TRAVELLER
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