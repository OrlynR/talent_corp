import React from 'react'
import { Typography } from '@mui/material';

const TypographyComponent = ({textElement,variantValue,sx}) => {
	return (
        <Typography variant={variantValue} sx={sx}>
            {textElement}
        </Typography>
	)
}

export default TypographyComponent