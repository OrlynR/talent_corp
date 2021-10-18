import React from 'react'
import { Box } from '@mui/material';

const CardWithTitle = ({imageValue,textValue,imageValueAlt}) => {
	return (
        <Box component='div'
            sx={{
                marginLeft:'30px',
                '& p':{
                    color:'#000000',
                    fontSize:'20px',
                    textAlign:'center'
                },
                '&:hover':{
                    filter: 'brightness(.5)',
                    '& p':{
                        color:'#0c2b45',
                        fontSize:'20px',
                        fontWeight:'bold'
                    }
                }
            }}
        >
            <img src={imageValue} alt={imageValueAlt} width='250px' height='150px'/>
            <p>{textValue}</p>
        </Box>
	)
}

export default CardWithTitle