import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Product from "./Product";
import Heading from "../Heading";

class NewArrivals extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: this.props.products,
			productsBAK: this.props.products,
			departments: this.props.departments,
		};
	}

	optionClicked(option) {
		let FilterList = this.state.productsBAK.filter((item) => item.department === option);
		if (FilterList.length > 0) {
			this.setState({ products: FilterList });
		} else {
			this.setState({ products: this.state.productsBAK });
		}
		this.setState({ selectedOption: option });
	}

	render() {
		const { products, departments } = this.state;

		return (
			<Container className="mt-5">
				<Row>
					<Heading title="New Arrivals" />
				</Row>
				<Row>
					<Col>
						<Nav className="justify-content-center" variant="tabs" defaultActiveKey="all">
							<Nav.Item>
								<Nav.Link eventKey="all" onClick={() => this.optionClicked("All")}>
									All
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="men" onClick={() => this.optionClicked("Men")}>
									Men
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="women" onClick={() => this.optionClicked("Women")}>
									Women
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
				</Row>
				<Row>
					{products &&
						products.slice(0, 8).map((item, index) => {
							return (
								<Col xs={12} md={6} lg={3} key={index}>
									<Product  productItem={item} addToCart={this.props.addToCart} />
								</Col>
							);
						})}
				</Row>
			</Container>
		);
	}
}

NewArrivals.propTypes = {
	addToCart: PropTypes.func,
};

export default NewArrivals;
