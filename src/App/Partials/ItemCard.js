import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ItemCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="/static/images/cards/contemplative-reptile.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
    <div className="form-group">
                                            <div className="form-item custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="customSwitch22"/>
                                                <label className="custom-control-label"
                                                       htmlFor="customSwitch22">Lost Item</label>
                                            </div>
                                        </div>
    </CardActions>
  </Card>
  )
}

export default ItemCard