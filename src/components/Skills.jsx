import React from 'react';
import { Slider, Typography } from '@mui/material'
import { Box } from '@mui/system';

const Skills = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-around', minHeight: '100vh', alignItems: 'center'}}>
      <Box sx={{width: '40%'}}>
        <Typography>JavaScript</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={80}
          color="secondary"
          disabled
        />
        <Typography>JavaScript</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={90}
          color="secondary"
          disabled
        />
        <Typography>JavaScript</Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={100}
          color="secondary"
          disabled
        />
      </Box>
      <Box sx={{width: '40%'}}>
        <Typography>JavaScript</Typography>
        <Slider
            aria-label="Temperature"
            defaultValue={80}
            color="secondary"
            disabled
          />
          <Typography>JavaScript</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={85}
            color="secondary"
            disabled
          />
          <Typography>JavaScript</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={90}
            color="secondary"
            disabled
          />
      </Box>
    </Box>
  );
};

export default Skills;