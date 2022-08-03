import React from 'react';
import { Slider, Typography } from '@mui/material'
import { Box } from '@mui/system';

const Skills = () => {

  const textStyle = {
    color: '#fff',
    fontSize: '1.5em'
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-around', minHeight: '100vh', alignItems: 'center'}} id="skills">
      <Box sx={{width: '40%'}}>
        <Typography sx={textStyle}>JavaScript</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={80}
          color="secondary"
          disabled
        />
        <Typography sx={textStyle}>HTML / CSS</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={95}
          color="secondary"
          disabled
        />
        <Typography sx={textStyle}>React</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={80}
          color="secondary"
          disabled
        />
        <Typography sx={textStyle}>Illustrator / Photoshop</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={90}
          color="secondary"
          disabled
        />
      </Box>
      <Box sx={{width: '40%'}}>
        <Typography sx={textStyle}>Communication</Typography>
        <Slider
            aria-label="Temperature"
            defaultValue={80}
            color="secondary"
            disabled
          />
          <Typography sx={textStyle}>Self Education</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={90}
            color="secondary"
            disabled
          />
          <Typography sx={textStyle}>Teamwork</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={90}
            color="secondary"
            disabled
          />
          <Typography sx={textStyle}>Creativity</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={95}
            color="secondary"
            disabled
          />
      </Box>
    </Box>
  );
};

export default Skills;