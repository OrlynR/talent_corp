import { createTheme, adaptV4Theme } from '@mui/material/styles'

export default createTheme(adaptV4Theme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	typography: {
		fontFamily: 'roboto',
	},
	palette: {
		// border - bg - text
		primary: {
			light: '#F5F9FF',
			main: '#0C2B45',
			dark: '#212121',
		},
		// bg_input - text - text_input
		secondary: {
			light: '#00000005',
			main: '#FFFFFF',
			dark: '#BABABA',
		},
		// border_color
		warning: {
			light: '#F5F5F5',
			main: '#E6E6E6',
			dark: '#B9CAE371',
		},
		// icon_color
		info: {
			light: '#00B8D4',
			main: '#27A0B0',
			dark: '#FF9D20',
		},
		// text-color_btn
		success: {
			light: '#818E94',
			main: '#0D843C',
			dark: '#E5EDF6',
		},
	},
	// overrides: {
	// 	MuiCssBaseline: {
	// 		'@global': {
	// 			fontFamily: 'RobotoRegular',
	// 		},
	// 	},
	// },
}))