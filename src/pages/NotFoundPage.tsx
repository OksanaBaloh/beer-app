import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#f7f7f7' }}>
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography variant="subtitle1">
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="secondary"
        style={{ marginTop: '20px' }}
      >
        Go to Home
      </Button>
    </div>
  );
};
