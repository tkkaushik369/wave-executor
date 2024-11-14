import React from 'react'
import TitleBar from './TitleBar'
import AppBaseProps from './interfaces/AppBaseProps'

export default function AppBase({ body, callBack }: AppBaseProps) {
	const appRef = React.createRef<HTMLDivElement>()

	React.useEffect(() => {
		if (callBack !== undefined) callBack()
	})

	return (
		<div ref={appRef} id="App">
			<TitleBar />
			<ul id="client-list">Clients</ul>
			{body}
		</div>
	)
}
