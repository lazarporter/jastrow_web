import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';

export const NavBar: React.FC = () => {
  const containerStyles: SxProps = {
    width: '100%',
    height: 60,
    backgroundColor: '#1C6E8C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" color={'#FBFCFF'}>
        Jastrow Web
      </Typography>
    </Box>
  );
};
