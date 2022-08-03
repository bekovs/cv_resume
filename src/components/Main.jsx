import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import avatar from '../images/test-image.jpg'
import Typography from '@mui/material/Typography';


const Main = () => {
  const contentStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '70vh',
    position: 'fixed',
    left: '50%',
    top: '10%',
    transform: 'translate(-50%, 0)'
  }

  const contentHidden = {
    visibility: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '70vh',
    position: 'fixed',
    left: '50%',
    top: '10%',
    transform: 'translate(-50%, 0)'
  }

  const [style, setStyle] = useState(contentStyles);

  const handleHiddenScroll = () => {
    if (window.scrollY > 700) {
      setStyle(contentHidden);
    } else {
      setStyle(contentStyles);
    }
  }

  window.addEventListener('scroll', handleHiddenScroll);

  return (
    <Box sx={style} id="main">
      <Avatar
        alt="S"
        src={avatar}
        sx={{ width: '30vmin', height: '32vmin' }}
      />
      <img src="" alt="" />
      <Typography sx={{color: 'white', mt: 5, fontSize: '4vmin'}}>
        Sultan Bekov
      </Typography>
      <Typography sx={{color: 'white', mt: 1, fontSize: '2vmin'}}>
        Web Developer
      </Typography>
      <Typography sx={{color: 'white', mt: 1, fontSize: '2vmin'}}>
        Designer
      </Typography>
    </Box>
  );
};

export default Main;