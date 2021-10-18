import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import ButtonComponent from '../../Atoms/ButtonComponent'
import constant from '../../../utils/constants'

export default function MultiActionAreaCard({wheelchair,descriptionWheelchair,wheelchairAlt}) {
  return (
    <Card sx={{ 
      maxWidth: 200,
      '&:hover':{
        zoom: '110%'
      }
      
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={wheelchair}
          alt={wheelchairAlt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {descriptionWheelchair}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ButtonComponent size="large" color="primary" width="100%"
        textButton={constant.accessButton.add}
      />
    </Card>
  );
}