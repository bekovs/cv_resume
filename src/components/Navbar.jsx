import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useState } from 'react';

export default function Navbar() {

  const navbarStyles = {
    appbar: {
      backgroundColor: 'transparent',
      color: 'white',
      position: 'fixed',
      transition: 'all 300ms',
      py: 2 
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      margin: '0 auto',
      py: 2
    }
  }

  const navbarStylesOnScroll = {
    appbar: {
      backgroundColor: 'rgb(255,255,255,0.8)',
      color: 'black',
      position: 'fixed',
      transition: 'all 300ms'
    },
    toolbar: {
      display: 'flex',
       justifyContent: 'space-between',
      width: '90%',
      margin: '0 auto',
      py: 2
    }
  }

  const [style, setStyle] = useState(navbarStyles);
  console.log(style)

  const handleScroll = (e) => {
    if (window.scrollY !== 0) {
      setStyle(navbarStylesOnScroll);
    } else {
      setStyle(navbarStyles);
    }
  }
  
  window.addEventListener('scroll', handleScroll);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={style.appbar} elevation={0}>
        <Toolbar variant="dense" sx={style.toolbar}>
          <Typography variant="h6" color="inherit" component="div">
            Sultan Bekov
          </Typography>
          <Box>
            <Button sx={{color: 'inherit', mx: 2}}>About me</Button>
            <Button sx={{color: 'inherit', mx: 2}}>Skills</Button>
            <Button sx={{color: 'inherit', mx: 2}}>Contact me</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}