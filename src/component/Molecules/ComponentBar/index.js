import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const ComponentBar = ({children}) => {
	return (
		<>
            <Box sx={{ backgroundColor:'white'}}>
                <AppBar position="static"
                    sx={{
                        backgroundColor:'white',
                        boxShadow:'none'
                        
                    }}
                >
                    <Toolbar
                        sx={{ 
                            display:'flex',
                            justifyContent:'center',
                            minHeight:'54px !important'
                         }}
                    >
                        {children}
                    </Toolbar>
                </AppBar>
            </Box>
		</>
	)
}

export default ComponentBar