import React                                                    from 'react'
import { Container, createStyles, makeStyles, Theme, useTheme } from '@material-ui/core'
import DisplayCard                                              from './components/card'
import * as config                                              from './config'
import Footer                                                   from './components/footer'
import NavBar                                                   from './components/navbar'

const useStyles = makeStyles( ( theme: Theme ) => createStyles( {
	root: {
		marginTop: "10vh",
		marginBottom: theme.spacing( 1 )
	}
} ) )

export default function App () {
	const classes = useStyles( useTheme() );
	document.title = config.SiteName+" - "+config.Author.name;
	
	return (
		<>
			<header>
				<NavBar/>
			</header>
			<Container component={"main"} className={classes.root} maxWidth={"sm"}>
				<DisplayCard/>
			</Container>
			<Footer/>
		</>
	)
}