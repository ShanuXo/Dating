import React from 'react';
import { Typography, Box } from '@mui/material';
import '../Style/Lovepage.css';

const LovePage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: '#ffe0e0',
      }}
    >
    <div className="party-popper"></div>
      <Typography variant="h3" gutterBottom>
        ❤️ I Love You Too! ❤️
      </Typography>
      <Typography variant="h5">💖💖💖</Typography>
    </Box>
  );
};

export default LovePage;
