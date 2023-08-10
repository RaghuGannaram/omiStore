import React, { Component } from "react";
import Product from "./Product";
import Heading from "../Heading";
import { Container, Row, Col } from "react-bootstrap";

class BestSeller extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: this.props.products,
		};
	}

	render() {
		const { products } = this.state;

		return (
			<Container className="mt-5">
				<Row>
					<Heading title="Best Sellers" />
				</Row>
				<Row>
					{products &&
						products.slice(5, 9).map((item, index) => {
							return (
								<Col xs={12} md={6} lg={3} key={index}>
									<Product productItem={item} addToCart={this.props.addToCart} />
								</Col>
							);
						})}
				</Row>
			</Container>
		);
	}
}

export default BestSeller;
