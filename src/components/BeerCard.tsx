import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Beer } from '../types/Beer';

type Props = {
  beer: Beer;
};

export const BeerCard: React.FC<Props> = ({ beer }) => {
  const { name, image_url, description, abv, ibu } = beer;

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">{name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
            <Typography component="div" variant="h6">
              ABV: {abv}%
            </Typography>
            <Typography component="div" variant="h6" sx={{ ml: 1 }}>
              IBU: {ibu}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '5',
              overflow: 'hidden'
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ p: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 80, objectFit: 'contain' }}
          src={image_url}
          alt={name}
        />
      </Box>
    </Card>
  );
};
