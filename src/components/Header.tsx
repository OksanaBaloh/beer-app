import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';

export const Header: React.FC = () => (
  <AppBar className="AppBar" position="fixed" color="secondary">
    <Toolbar>
      <Typography variant="h4" component="h4" sx={{ flexGrow: 1, textAlign: 'center' }}>
        Craft Beer Recipes
      </Typography>
    </Toolbar>
  </AppBar>
);
