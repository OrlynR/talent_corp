import * as React from 'react'
import {Box,Typography} from '@mui/material'
import Link from '@mui/material/Link';

const FooterComponents = ({titleFooterSection,items}) => {
    
	return (
        <Box sx={{
           padding:'0 3px'

        }}>
            <Typography sx={{
                fontSize:'18px',
                marginBottom:'18px',
                textAlign:'left',
                color:'yellow'
            }}>
                {titleFooterSection}
            </Typography>
            <Box
                sx={{
                    fontSize:'14px',
                    color:'white',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    alightItem:'center'
                }}
            >
                {items?.map((item, i) =>  
                <Link key={i}
                sx={{
                    fontSize:'16px',
                    color:'white',
                    marginBottom:'8px'
                }}
                >{item?.textValue}
                </Link>)}
            </Box>
        </Box>
	)
}

export default FooterComponents