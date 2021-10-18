import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {ThemeProvider,CssBaseline} from '@mui/material'
import theme from './utils/theme'
import Main from './screen/Main'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Switch>
						<Route exact path='/' component={Main}></Route>
					</Switch>
				</Router>
		</ThemeProvider>
	)
}

export default App
