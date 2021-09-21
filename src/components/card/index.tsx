import React                                                                                from 'react'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	createStyles,
	makeStyles,
	Paper,
	Theme,
	useTheme
} from '@material-ui/core'
import Title                                                                                from './title'
import Content                                                                 from './content'
import * as config from "../../config"

const useStyles = makeStyles((theme:Theme)=>createStyles({
	card: {
	},
	actions: {
		display: 'flex',
		flexDirection: "row",
		justifyContent: "space-around"
	},
	button: {
		width: "95%"
	}
}))

export default function DisplayCard() {
	const theme = useTheme();
	const classes = useStyles(theme);
	
	return (
			<Card className={classes.card}>
				<CardContent>
					<Title/>
					<Content/>
				</CardContent>
				<CardActions className={classes.actions}>
					<Button
						size={"large"}
						color={"primary"}
						href={config.Author.site}
						className={classes.button}
					>
						{"Homepage"}
					</Button>
				</CardActions>
			</Card>
	)
}