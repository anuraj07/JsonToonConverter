import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#556B2F',
        color: '#D3D3D3',
        padding: '1rem',
        textAlign: 'center',
        width: '100%',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2">
        Created with ❤️ by Jules
      </Typography>
    </Box>
  );
};

export default Footer;
