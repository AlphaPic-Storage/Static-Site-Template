import React                                                    from 'react'
import { Container, createStyles, makeStyles, Theme, useTheme } from '@material-ui/core'
import DisplayCard                                              from './components/card'
import * as config                                              from './config'
import Footer                                                   from './components/footer'

const useStyles = makeStyles((theme:Theme) => createStyles({
	root: {
		marginTop: "10vh",
	}
}))

export default function App() {
	const classes = useStyles(useTheme());
	document.title = config.SiteName;
	
	return (
		<>
			<header>
			
			</header>
			<Container component={"main"} className={classes.root} maxWidth={"sm"}>
				<DisplayCard />
				<Footer/>
			</Container>
		</>
	)
}