import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";

class BaseLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topHaderClass: "show",
		};
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillMount() {
		window.scrollTo(0, 0);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll = (event) => {
		if (window.scrollY >= 50) {
			this.setState({ topHaderClass: "hide" });
		} else {
			this.setState({ topHaderClass: "show" });
		}
	};
	render() {
		return (
			<Container fluid>
				<Navigation />
				<Row>
					<Col>{this.props.children}</Col>
				</Row>
				<Footer />
			</Container>
		);
	}
}

export default BaseLayout;
