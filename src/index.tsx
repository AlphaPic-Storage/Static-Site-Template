import React                from 'react'
import ReactDOM                          from 'react-dom'
import { createTheme, MuiThemeProvider } from '@material-ui/core'
import App from "./app"
import "./style.css"

const theme = createTheme();

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<App/>
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
)