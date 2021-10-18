import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const AccessLink = ({IconImage,content}) => {
	return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems:'center'
            }}
        >
            {IconImage}
            <Link href="#" underline="hover" 
            sx={{
                color:"black",
                fontWeight:300,
                fontSize:"12px",
                textAlign:"center",
                '&:hover':{
                    color: '#0C2B45' 
                }
            }}
            >{content}</Link>
        </Box>
	)
}

export default AccessLink