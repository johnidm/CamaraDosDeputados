import React from 'react';
import Router from "./routes";
import "./global.css";

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Router />
			</div>
		)
	}
}