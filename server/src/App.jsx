import React, { Component } from "react";
import Routes from "./routes";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./assets/css/style.css";
// import "./assets/css/responsive.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		// AOS.init();
	}
	render() {
		return (
			<div>
				<Routes />
			</div>
		);
	}
}

export default App;
