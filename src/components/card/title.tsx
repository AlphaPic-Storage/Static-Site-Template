import React                                                              from 'react'
import { createStyles, Divider, makeStyles, Theme, Typography, useTheme } from '@material-ui/core'
import * as config                                                        from "../../config"

const useStyles = makeStyles((theme:Theme)=>createStyles({
	title: {
		textAlign: "center",
		marginBottom: theme.spacing(1),
		fontWeight: 500
	}
}))

export default function Title() {
	const theme = useTheme();
	const classes = useStyles(theme);
	
	return (
		<div id={"title"}>
			<Typography component={'h1'} variant={'h3'} className={classes.title}>
				{config.SiteName}
			</Typography>
			<Divider/>
		</div>
	)
}