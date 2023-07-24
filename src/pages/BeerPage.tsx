import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBeerListStore } from '../stores/useBeerListStore';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NotFoundPage } from './NotFoundPage';

export const BeerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { beerId } = useParams();
  if (!beerId) {
    return <NotFoundPage />;
  }
  const { beers } = useBeerListStore();
  const beer = beers.find((beer) => beer.id === +beerId);
  if (!beer) {
    return <NotFoundPage />;
  }
  return (
    <div className="beer-page-container">
      <Typography variant="h4" gutterBottom>
        {beer.name}
      </Typography>
      <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textDecoration: 'underline', fontStyle: 'italic' }}
            >
              {beer.tagline}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {beer.description}
            </Typography>
            <Typography variant="h6" mt={2}>
              Brewing Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2">First Brewed: {beer.first_brewed}</Typography>
                <Typography variant="body2">ABV: {beer.abv}%</Typography>
                <Typography variant="body2">IBU: {beer.ibu}</Typography>
                <Typography variant="body2">EBC: {beer.ebc}</Typography>
                <Typography variant="body2">SRM: {beer.srm}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2">pH: {beer.ph}</Typography>
                <Typography variant="body2">Attenuation Level: {beer.attenuation_level}</Typography>
                <Typography variant="body2">
                  Volume: {beer.volume.value} {beer.volume.unit}
                </Typography>
                <Typography variant="body2">
                  Boil Volume: {beer.boil_volume.value} {beer.boil_volume.unit}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
        <Box sx={{ p: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 80, backgroundSize: 'contain' }}
            src={beer.image_url}
            alt={beer.name}
          />
        </Box>
      </Card>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card sx={{ mb: 1 }}>
            <CardContent>
              <Typography variant="h6">Method</Typography>
              <Typography variant="body2">Mash Temperatures:</Typography>
              {beer.method.mash_temp.map((mash, index) => (
                <Typography variant="body2" key={index}>
                  - {mash.temp.value} {mash.temp.unit} ({mash.duration} minutes)
                </Typography>
              ))}
              <Typography variant="body2">
                Fermentation Temperature: {beer.method.fermentation.temp.value}{' '}
                {beer.method.fermentation.temp.unit}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ mb: 1 }}>
            <CardContent>
              <Typography variant="h6">Ingredients</Typography>
              <Typography variant="body2">Malts:</Typography>
              {beer.ingredients.malt.map((malt, index) => (
                <Typography variant="body2" key={index}>
                  - {malt.name} ({malt.amount.value} {malt.amount.unit})
                </Typography>
              ))}
              <Typography variant="body2">Hops:</Typography>
              {beer.ingredients.hops.map((hop, index) => (
                <Typography variant="body2" key={index}>
                  - {hop.name} ({hop.amount.value} {hop.amount.unit}) - {hop.add} ({hop.attribute})
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ mb: 1 }}>
            <CardContent>
              <Typography variant="h6">Food Pairing</Typography>
              <List dense>
                {beer.food_pairing.map((food, index) => (
                  <ListItem key={index}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <FavoriteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={food} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
