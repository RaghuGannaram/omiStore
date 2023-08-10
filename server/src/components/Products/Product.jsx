import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function SingleProduct(props) {
	const { productItem } = props;
	const history = useHistory();

	const goToProductDetails = () => {
		history.push(`/product/${productItem._id}`);
	};
	
	return (
		<Container className="my-4">
			<Row onClick={() => goToProductDetails()}>
				<img src={productItem.imagePath} alt="" className="img-fluid" />
			</Row>
			<Row className="my-2 px-2">
				<Col xs={10}>{productItem.title}</Col>
				<Col xs={2} className="text-end">
					<i className="far fa-heart"></i>
				</Col>
			</Row>
			<Row className="my-2 px-2">
				<Col>
					<div>
						₹ {productItem.price} ₹ <strike>{(parseFloat(productItem.price) + 30).toFixed(2)}</strike>
					</div>
				</Col>
				<Col className="text-end">
					<Button className="btn-sm btn-secondary" onClick={() => props.addToCart(productItem._id)}>
						Add to cart
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default SingleProduct;
