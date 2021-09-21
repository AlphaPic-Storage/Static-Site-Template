import React                    from 'react'
import { IconButton }    from '@material-ui/core'
import { GitHub as GitHubIcon } from '@material-ui/icons'

export default function NavGitHubIcon(
	props: {
		className: string,
		isDisplay: boolean,
		userName: string
	}
	) {
	if(props.isDisplay) {
		return (
			<IconButton
				href={"https://github.com/" + props.userName + "/"}
				target={"_blank"}
				color={"inherit"}
				className={props.className}
			>
				<GitHubIcon/>
			</IconButton>
		)
	} else {
		return <></>
	}
}