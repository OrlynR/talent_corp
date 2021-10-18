import * as React from 'react';
import Box from '@mui/material/Box';
import TypographyComponent from '../../Atoms/TypographyComponent';
import ButtonComponent from '../../Atoms/ButtonComponent';
import constants from '../../../utils/constants'



const CardCenter = ({imageCenter,textElement}) => {
	return (
        <Box component="div" sx={{ 
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'column',
            top: 0,
            left: 0,
            backgroundImage: `url(${imageCenter})`,
            margin:'0px 4px',
            width:'450px',
            height:'300px',
            boderRadius:'10px'
       }}>
           <Box component="div">
            <TypographyComponent variantValue='h6' textElement={textElement} sx={{color:'#0C2B45',fontWeight:'bold',fontSize:'24px'}}/>
            <ButtonComponent textButton={constants.accessButton.default}/>
           </Box>
        </Box>
	)
}

export default CardCenter