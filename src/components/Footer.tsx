import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.5)',
        padding: '1rem',
        textAlign: 'center',
        width: '100%',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)'
      }}
    >
      <Typography variant="body2">
        Created with ❤️ by Jules
      </Typography>
    </Box>
  );
};

export default Footer;
