import React                                                                                  from 'react'
import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography, useTheme } from '@material-ui/core'
import * as config   from "../../config"
import NavGitHubIcon from './github'

const useStyles = makeStyles( ( theme: Theme ) => createStyles( {
	bar: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	button: {
		marginRight: theme.spacing( 1.5 )
	}
} ) )

export default function NavBar () {
	const theme = useTheme();
	const classes = useStyles( theme );
	
	return (
		<nav>
			<AppBar position={"static"} className={classes.bar}>
				<Toolbar>
					<Typography variant={"h5"} component={"span"} className={classes.title}>
						{config.SiteName}
					</Typography>
					<NavGitHubIcon className={classes.button} isDisplay={!!(config.Author.github)} userName={config.Author.github} />
				</Toolbar>
			</AppBar>
		</nav>
	)
}