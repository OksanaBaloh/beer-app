import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, CircularProgress } from '@mui/material';
import { BeerList } from '../components/BeerList';
import { useBeerListStore } from '../stores/useBeerListStore';

export const MainPage: React.FC = () => {
  const { beers, selectedBeers, deleteSelectedBeers } = useBeerListStore();

  const handleDeleteClick = () => {
    deleteSelectedBeers();
  };

  const renderedBeers = beers.slice(0, 15);

  return (
    <>
      {renderedBeers.length ? (
        <BeerList beers={renderedBeers} />
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress color="secondary" />
        </Box>
      )}

      {selectedBeers.length > 0 && (
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      )}
    </>
  );
};
