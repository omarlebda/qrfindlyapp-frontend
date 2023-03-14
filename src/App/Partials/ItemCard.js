import React, {useState, useEffect, useContext} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ItemContext from '../../context/item/ItemContext'
import { saveAs } from 'file-saver';
import image1 from '../../assets/img/image1.jpg'
function ItemCard({item}) {
  const {deleteItem} = useContext(ItemContext)
  const [img, setImage] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const base64String = btoa(String.fromCharCode(...new Uint8Array(item?.itemPicture?.data)));
    setImage(base64String)
  }, [])


  const handleDownload = async () => {
    // Convert the array buffer to a data URL
    const base64Image = Buffer.from(item?.itemQRCode).toString('base64');
    const dataUrl = `data:image/jpeg;base64,${base64Image}`;

    // Create a new Blob object from the data URL
    const blob = await fetch(dataUrl).then((res) => res.blob());

    // Use the file-saver library to save the image to the user's computer
    saveAs(blob, `${item?.itemName} QR Code`);
  };



  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setLoading(true);
      deleteItem(item?._id)
      setLoading(false);
    }
    
  };


  return (
    <Card sx={{ maxWidth: 345 }} className="all-items-card">
    <CardMedia
      sx={{ height: 140 }}
      image= {img ? `data:image/png;base64,${img}` : image1}
      title="green iguana"
    />
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item?.itemName}
      </Typography>
      <Button className='btn btn-light' onClick={handleDownload} >Download QR Code</Button>
    </CardContent>
    <CardActions>
    <FormGroup>
      <FormControlLabel control={<Switch />} label="Lost" />
    </FormGroup>
    </CardActions>
    <CardActions>
    <Button color='error' onClick={handleDelete}>Delete</Button>
    </CardActions>
  </Card>
  )
}

export default ItemCard