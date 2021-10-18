import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import contants from '../../../utils/constants'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border:'1px solid black',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '350px',
    },
  }));
  const SearchIconWrapperStyle = styled('div')(({ theme }) => ({
    paddingLeft: '90%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }));
const StyledInputBaseStyle = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(0.7, 0, 0.7, 0.7),
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      fontSize: '12px',
      width: '300px',
      color:'#000000de',
      [theme.breakpoints.up('sm')]: {
        width: '300px',
        color:'#000000de',
      },
    },
  }));

const SearchBar = () => {
	return (
    <Search>
      <SearchIconWrapperStyle>
        <SearchIcon fontSize="small" sx={{color: '#FFFF',backgroundColor:'black', padding:'3px', borderRadius:'4px'}}/>
      </SearchIconWrapperStyle>
      <StyledInputBaseStyle
        placeholder={contants.search_placeholder}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
	)
}

export default SearchBar