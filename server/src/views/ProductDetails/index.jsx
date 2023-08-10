import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import Auth from "../../modules/Authentication";
import { getProductById, getVariantsByProductId, updateCartItems } from "../../redux/actions";

class ProductDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			color: "",
			size: "",
			picture: "",
			selectedSize: "",
			quantity: 1,
		};
	}

	componentDidMount() {
		this.props.getProductById(this.props.match.params.id);
		this.props.getVariantsByProductId(this.props.match.params.id);
	}

	handleThumbnailClick = (item) => {
		this.setState({
			id: item._id,
			color: item.color,
			size: item.size,
			picture: item.imagePath,
			selectedSize: "",
		});
	};

	onAddClicked = () => {
		this.setState({ quantity: this.state.quantity + 1 });
		this.props.updateCartItems(this.state.id || this.props.match.params.id, true, false);
	};

	onRemoveClicked = () => {
		this.props.updateCartItems(this.state.id || this.props.match.params.id, false, true);

		if (this.state.quantity > 1) {
			this.setState({ quantity: this.state.quantity - 1 });
		}
	};

	addToCart = () => {
		if (Auth.getUserToken() !== undefined) {
			this.props.updateCartItems(this.state.id || this.props.match.params.id);
		} else {
			console.log("Unable to add item to cart...!");
		}
	};

	productInCart = () => {
		let available = false;
		// let items = this.props.cart.items;
		// if (items !== undefined && items !== null) {
		//   let itemCheck = Object.keys(items).map(
		//     id => items[id].item.title === this.props.product.title
		//   );

		//   if (itemCheck !== undefined && itemCheck !== null) {
		//     this.setState({ cartItem: itemCheck });
		//     available = true;
		//   } else {
		//     available = false;
		//   }
		// }

		return available;
	};

	render() {
		console.log(this.props);
		return (
			this.props.product && (
				<Container>
					<Row>
						<Breadcrumb>
							<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
							<Breadcrumb.Item href="#">{this.props.product.department}</Breadcrumb.Item>
							<Breadcrumb.Item href="#">{this.props.product.category}</Breadcrumb.Item>
						</Breadcrumb>
					</Row>

					<Row>
						<Col lg={7}>
							<Row>
								<Col lg={9}>
									<img
										src={this.state.picture || this.props.product.imagePath}
										style={{ maxHeight: "600px" }}
										className="img-fluid"
										alt="product"
									/>
								</Col>
								<Col lg={3}>
									<div className="single_product_thumbnails">
										<ul>
											{this.props.variants &&
												this.props.variants.slice(0, 4).map((item, index) => (
													<li key={index} onClick={() => this.handleThumbnailClick(item)}>
														<img src={item.imagePath} className="img-fluid" alt="product" />
													</li>
												))}
										</ul>
									</div>
								</Col>
							</Row>
						</Col>
						<Col lg={5}>
							<div>
								<div className="d-flex justify-content-between align-items-center">
									<h2>{this.props.product.title}</h2>
									<i className="far fa-heart"></i>
								</div>
								<p>{this.props.product.description}</p>
							</div>
							<div className="my-1">
								<i className="fas fa-truck"></i> <span>free delivery</span>
							</div>
							<div className="my-1">
								<span>₹ {this.props.product.price} </span>
								<strike>₹ {(parseFloat(this.props.product.price) + 30).toFixed(2)}</strike>
							</div>
							<div className="my-1">
								<span>
									<i className="fa fa-star" aria-hidden="true"></i>
								</span>
								<span>
									<i className="fa fa-star" aria-hidden="true"></i>
								</span>
								<span>
									<i className="fa fa-star" aria-hidden="true"></i>
								</span>
								<span>
									<i className="fa fa-star" aria-hidden="true"></i>
								</span>
								<span>
									<i className="fa fa-star" aria-hidden="true"></i>
								</span>
							</div>
							<div className="my-1">
								<span>Select Color:</span>
								<span style={{ color: "#e54e5d", padding: "2px" }}>
									<i className="fas fa-circle"></i>
								</span>
								<span style={{ color: "#252525", padding: "2px" }}>
									<i className="fas fa-circle"></i>
								</span>
								<span style={{ color: "#60b3f3", padding: "2px" }}>
									<i className="fas fa-circle"></i>
								</span>
							</div>
							<div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
								<span>Quantity:</span>
								<span className={this.state.quantity > 1 ? "minus" : "minus disabled"} onClick={() => this.onRemoveClicked()}>
									<i className="fa fa-minus"></i>
								</span>
								<span id="quantity_value">{this.state.quantity}</span>
								<span className="plus" onClick={() => this.onAddClicked()}>
									<i className="fa fa-plus"></i>
								</span>
							</div>
							<div className="text-end">
								<Button className="btn-sm btm-primary" onClick={this.addToCart}>
									Add to cart
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
			)
		);
	}
}

const mapStoreToProps = (state) => ({
	product: state.product.product,
	variants: state.variant.variants,
});

const mapDispatchToProps = {
	getProductById,
	getVariantsByProductId,
	updateCartItems,
};

export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(ProductDetails));
