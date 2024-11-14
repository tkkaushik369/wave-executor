import './Components.css'
import React from 'react'
import AppBase from './AppBase'
import AppProps from './interfaces/AppProps'
import { Work } from './Work'

export function App({ callBack }: AppProps) {
	return <AppBase body={<Work />} callBack={callBack} />
}
