import React from 'react';
import Box from '@mui/material/Box'
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography'

const AboutMe = () => {
  return (
    <Box sx={{display: 'flex', backgroundColor: 'white', justifyContent: 'center', zIndex: 100}}>
      <Typography variant="h2" component="div">
        About me
      </Typography>
    </Box>
  );
};

export default AboutMe;