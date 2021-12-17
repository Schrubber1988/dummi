import * as React from 'react';
import iguana from '../assets/pics/contemplative-reptile.jpg'
import { Card, CardMedia, CardContent, Typography, CardActions, Button  } from '@mui/material';

export default function Greeting() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image = {iguana}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Echserich
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Vielleicht wird es doch eine Tier- App ;-) 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

