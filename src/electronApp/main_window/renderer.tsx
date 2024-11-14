import '../../client/css/main.css'
import '../../client/css/titleBar.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { SetDarkMode, SetLightMode, initPreload } from './preload'
import { App } from './App'
import { AppServer, ConnectedEvent, DisconnectedEvent } from '../../server/server'

// document.body.className = 'bodyTransparent'
var appServer: AppServer | null = null

const rootElement = document.getElementById('root')
if (rootElement !== null) {
	const root = ReactDOM.createRoot(rootElement)

	root.render(
		// <React.StrictMode>
		<App callBack={ReactLoaded} />
		// </React.StrictMode>
	)
}

function ReactLoaded() {
	console.log('react loaded')
	initPreload()
	SetLightMode()
	SetDarkMode()

	const clientListDom = document.getElementById('client-list')

	appServer = new AppServer(3000)
	appServer.Start()

	appServer.addEventListener('connected', (event: Event) => {
		const evt = event as ConnectedEvent
		const arc = document.createElement('li')
		arc.innerText = evt.detail.id
		arc.id = evt.detail.id
		console.log('client List conn', evt.detail.id, clientListDom)
		if (clientListDom !== null) clientListDom.appendChild(arc)
	})

	appServer.addEventListener('disconnected', (event: Event) => {
		const evt = event as DisconnectedEvent
		const ele = document.getElementById(evt.detail.id)
		console.log('client List disconn', evt.detail.id)
		if (clientListDom !== null && ele !== null) clientListDom.removeChild(ele)
	})
}
