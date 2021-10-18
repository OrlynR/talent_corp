import * as React from 'react';
import Box from '@mui/material/Box';
import TypographyComponent from '../../Atoms/TypographyComponent';
import ButtonComponent from '../../Atoms/ButtonComponent';
import constants from '../../../utils/constants'
import imageCenter from'../../../assets/image/imageCenter.jpg'



const CenterRow = () => {
	return (
        <Box component="div" sx={{ 
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'column',
            top: 0,
            left: 0,
            backgroundImage: `url(${imageCenter})`,
            height:'600px',
            backgroundSize: 'cover', 
            paddingLeft:'10%'
       }}>
           <Box component="div" sx={{ width:'20%'}}>
            <TypographyComponent variantValue='h2' textElement={constants.text_center_row} sx={{color:'white'}}/>
            <ButtonComponent textButton={constants.accessButton.default}/>
           </Box>
        </Box>
	)
}

export default CenterRow