import React                                                              from 'react'
import { createStyles, makeStyles, Theme, Typography, useTheme } from '@material-ui/core'
import * as config                                                        from "../../config"

const useStyles = makeStyles((theme:Theme)=>createStyles({
	content: {
		textAlign: "left",
		marginBottom: theme.spacing(1),
		fontWeight: 300,
		marginTop: theme.spacing(1),
		marginLeft: theme.spacing(1.5),
		marginRight: theme.spacing(1.5),
		letterSpacing: theme.spacing(0.15),
		fontFamily: '\'Noto Sans\', \'Noto Sans SC\', \'Noto Sans HK\', \'Noto Sans JP\', sans-serif',
		minHeight: 250
	}
}))

export default function Content() {
	const theme = useTheme();
	const classes = useStyles(theme);
	
	return (
		<div id={"content"}>
			<Typography component={'p'} variant={'body1'} className={classes.content}>
				{"\t"+config.Describe}
			</Typography>
		</div>
	)
}