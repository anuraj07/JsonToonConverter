import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#556B2F' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#D3D3D3' }}>
          JSON to TOON Converter
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
