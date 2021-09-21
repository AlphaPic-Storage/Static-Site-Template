import React                                                                    from 'react'
import { createStyles, Divider, Link, makeStyles, Theme, Typography, useTheme } from '@material-ui/core'
import * as config                                                              from "../../config"
import dayjs                                                                    from 'dayjs'
import classNames                                                               from 'classnames'

const useStyles = makeStyles((theme:Theme)=>createStyles({
	footer: {
		textAlign: "center",
		marginBottom: theme.spacing(1),
		fontWeight: 400,
		marginTop: theme.spacing(1)
	},
	copyright: {
		fontSize: 8,
		textDecoration: "none"
	}
}))

export default function Footer() {
	const theme = useTheme();
	const classes = useStyles(theme);
	
	let timeDisplay:string = ""+dayjs().year();
	if(dayjs().year() > 2021) {
		timeDisplay = timeDisplay+" - "+dayjs().year();
	}
	
	return (
		<div id={"footer"}>
			<Typography component={"p"} variant={'body2'} className={classes.footer}>
				{"Copyright © "+timeDisplay+" "}
				<Link
					href={config.Author.site}
					target={"_self"}
					color={"secondary"}
					variant={"inherit"}
					rel={"noreferrer"}
				>
					{config.Author.name}
				</Link>
				{" All Right Reserved"}
			</Typography>
			<Typography component={"p"} variant={'body2'} className={classNames(classes.footer,classes.copyright)}>
				{"Powered by "}
				<Link href={"https://github.com/AlphaPic-Storage/Static-Site-Template"} target={"_blank"} color={'inherit'}>
					{"AlphaPic-Storage/Static-Site-Template"}
				</Link>
			</Typography>
		</div>
	)
}