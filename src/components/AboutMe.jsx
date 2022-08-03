import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { orange } from '@mui/material/colors';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';

const AboutMe = () => {
  return (
    <Box sx={{display: 'flex', backgroundColor: 'white', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center', minHeight: '100vh'}}>
      <Typography variant="h2" component="div" sx={{ margin: '5vmin 0'}}>
        About me
      </Typography>
      <Box sx={{width: '80%'}}>
        <Typography sx={{fontSize: '2vmin'}}>
          Hello, i'm <b style={{color: orange[700]}}>Sultan</b>, web developer from Kyrgyzstan consectetur adipisicing elit.
          Rerum placeat nobis obcaecati id magni cumque eos quia ad, sapiente perferendis
          asperiores distinctio fugit soluta! Consequuntur ipsum consectetur rem perspiciatis. Distinctio!
        </Typography>
        <br></br>
        <Typography sx={{fontSize: '2vmin'}}>
          Rerum placeat nobis obcaecati id magni cumque eos quia ad, sapiente perferendis
          asperiores distinctio fugit soluta! Consequuntur ipsum consectetur rem perspiciatis. Distinctio!
        </Typography>
      </Box>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '1.8vmin',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 5,
            minWidth: '30vw',
            maxWidth: '30vw',
            height: '35vh',
          },
        }}
      >
        <Paper elevation={5}>
          <Box>
            <Typography sx={{m: 3}} component="div" variant="h5">Personal Details</Typography>
          </Box>
          <Box className="details">
            <Typography sx={{my: 2, mx: 5, fontWeight: 600, color: orange[700], fontSize: 'inherit'}} component="p" className="birth">Birthdate</Typography>
            <Typography sx={{my: 2, mx: 5, fontWeight: 600, color: orange[700], fontSize: 'inherit'}} component="p" className="phone">Phone</Typography>
            <Typography sx={{my: 2, mx: 5, fontWeight: 600, color: orange[700], fontSize: 'inherit'}} component="p" className="email">Email</Typography>
            <Typography sx={{my: 2, mx: 5, fontWeight: 600, color: orange[700], fontSize: 'inherit'}} component="p" className="website">Website</Typography>
          </Box>
        </Paper>
        <Paper elevation={5}>
        <Box>
            <Typography sx={{m: 3}} component="div" variant="h5">My interests</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems:'center', width:'80%', margin: '0 auto'}} className="interests">
            <Box sx={{width: "20%"}}>
              <CodeIcon />
              <Typography sx={{mt:1}}>Coding</Typography>
            </Box>
            <Box sx={{width: "20%"}}>
              <SportsEsportsIcon />
              <Typography sx={{mt:1}}>Games</Typography>
            </Box>
            <Box sx={{width: "20%"}}>
              <LocalDrinkIcon />
              <Typography sx={{mt:1}}>Cola</Typography>
            </Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems:'center', width:'80%', margin: '5vmin auto'}} className="interests">
            <Box sx={{width: "20%"}}>
              <AttachMoneyIcon />
              <Typography sx={{mt:1}}>Money</Typography>
            </Box>
            <Box sx={{width: "20%"}}>
              <LocalAirportIcon />
              <Typography sx={{mt:1}}>Travel</Typography>
            </Box>
            <Box sx={{width: "20%"}}>
              <MusicNoteIcon />
              <Typography sx={{mt:1}}>Music</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AboutMe;