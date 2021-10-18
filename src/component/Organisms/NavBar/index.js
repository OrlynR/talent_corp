import * as React from 'react';
import Box from '@mui/material/Box';
import ComponentBar from '../../Molecules/ComponentBar'
import SearchBar from '../../Molecules/SearchBar'
import AccessLink from '../../Atoms/AccessLink'
import constants from '../../../utils/constants'

//image
import AccessibleIcon from '@mui/icons-material/Accessible';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar'


const NavBar = () => {
	return (
		<>
            <Box sx={{ width:'85%', paddingTop:'8px'}}>
                <ComponentBar
                    children={
                    <>
                        <Box  sx={{ width:'30%', display:'flex',justifyContent:'center' }}>
                        <Avatar>MR</Avatar>
                        </Box>
                        <Box
                            sx={{ 
                                display:'flex',
                                justifyContent:'space-between',
                                alignItems:'center',
                                width:'70%'
                            }}
                        >
                            <SearchBar/>
                            <Box>
                                <AccessLink
                                    content={constants.accessButton.orders}
                                />
                            </Box>
                            <Box>
                                <AccessLink
                                    content={
                                        <>
                                            <p style={{margin:0}}>{constants.accessButton.user}</p>
                                            <p style={{margin:0}}>{constants.accessButton.enter}</p>
                                        </>
                                    }
                                />
                            </Box>
                            <Box>
                                <AccessLink
                                    IconImage={<ShoppingCartTwoToneIcon sx={{color: '#0C2B45'}}/>}
                                    content={constants.accessButton.cart}
                                />
                            
                            </Box>
                        </Box>
                    </>
                        
                    }
                />
                 <ComponentBar
                    children={
                    <>
                        <Box
                            sx={{ width:'28%', display:'flex',justifyContent:'center' }}
                        >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2,color: "#0C2B45",marginLeft:'0px', marginRight:'0px'}}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box
                             sx={{ 
                                display:'flex',
                                justifyContent:'space-between',
                                width:'70%'
                            }}
                        >
                            <AccessLink
                                    IconImage={<AccessibleIcon  sx={{ color: "#0C2B45" }}/>}
                                    content={constants.accessButton.mobility}
                            />
                            <AccessLink
                                    IconImage={<FavoriteBorderIcon sx={{ color: '#0C2B45' }}/>}
                                    content={constants.accessButton.watchOut}
                            />
                            <AccessLink
                                    IconImage={<PersonIcon sx={{ color: '#0C2B45' }}/>}
                                    content={constants.accessButton.professionals}
                            />
                            <AccessLink
                                    IconImage={<CleanHandsIcon sx={{ color: '#0C2B45' }}/>}
                                    content={constants.accessButton.faceMask}
                            />

                        </Box>
                    </>
                        
                    }
                />
            </Box>
		</>
	)
}

export default NavBar