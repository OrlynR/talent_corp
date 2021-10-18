import React from 'react';
import { Box } from '@mui/material';
import TypographyComponent from '../../Atoms/TypographyComponent'


const MasonryContainer=(props)=> {
    return (
        <Box component='div' 
        sx={{
            padding:'4px',
        }}
        >
            {
                props.imgUrl.map((item,i)=>{
                    return (
                    <>
                        <img src={item} alt="detailImg" key={i} width='30%' height='20%' style={{
                            position: 'relative',
                             display: 'flex',
                            alignItems: 'center',
                            justifyCenter:'center',
                            p: 4,
                            pt: 2,
                            padding:'6px',
                            filter: 'brightness(.5)',
                        }}/>
                        <TypographyComponent textElement='LOREM IPSUM' sx={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            color:'#FFFF',
                            fontSize:'12px',
                            }}/>
                    </>
                    )
                })
            }
        </Box>
    );
}

export default MasonryContainer;