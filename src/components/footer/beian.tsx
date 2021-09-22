import React                                                           from 'react'
import { createStyles, Link, makeStyles, Theme, Typography, useTheme } from '@material-ui/core'

const useStyles = makeStyles((theme:Theme)=>createStyles({
	root: {
		textDecoration: "none",
		textAlign: "center",
		letterSpacing: theme.spacing(0.1)
	}
}))

export default function BeianText(props:{num:string}) {
	const theme = useTheme()
	const classes = useStyles(theme)
	
	if(!!(props.num)) {
		return (
			<Typography
				variant={"body2"}
				className={classes.root}
				color={"inherit"}
			>
				{"备案号："}
				<Link
					href={"//beian.miit.gov.cn"}
					target={"_blank"}
					rel={"noreferrer"}
					aria-label={"Beian"}
					color={"primary"}
				>
					{props.num}
				</Link>
			</Typography>
		)
	} else {
		return (
			<></>
		)
	}
}