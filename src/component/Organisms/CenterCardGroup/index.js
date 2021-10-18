import * as React from 'react';
import Box from '@mui/material/Box';
import CardCenter from '../../../component/Molecules/CardCenter';
import imageSix from'../../../assets/image/imageSix.jpg'
import constants from'../../../utils/constants'



const CenterCardGroup = () => {
	return (
        <Box component="div" 
            sx={{
                display:'flex',
                justifyContent:'center'
            }}
        >
            <CardCenter
                imageCenter={imageSix}
                textElement={constants.title.value5}
            />
            <CardCenter
                imageCenter={imageSix}
                textElement={constants.title.value6}
            />
        </Box>
	)
}

export default CenterCardGroup