
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

const DatePage = () => {
  const navigate = useNavigate();
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYes = () => {
    navigate('/love');
  };

  const handleNoHover = () => {
    const randomX = Math.random() * window.innerWidth * 0.6;
    const randomY = Math.random() * window.innerHeight * 0.6;
    setNoButtonStyle({
      position: 'absolute',
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

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
      <Typography variant="h3" gutterBottom>
        Will you go on a date with me? 🌹
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleYes}>
          YES
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={noButtonStyle}
          onMouseEnter={handleNoHover}
        >
          NO
        </Button>
      </Box>
    </Box>
  );
};

export default DatePage;
