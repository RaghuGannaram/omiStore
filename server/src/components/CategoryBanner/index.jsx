import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Banner1 from "../../assets/images/category-cloths.jpg";
import Banner2 from "../../assets/images/category-electronics.jpg";
import Banner3 from "../../assets/images/category-personal-care.jpg";
import Banner4 from "../../assets/images/category-household.jpg";

function CategoryBanner() {
	return (
		<Container className="mt-5">
			<Row gap={5}>
				<Col md={6} lg={3} className="mb-4">
					<Card className="shadow">
						<Card.Img variant="top" src={Banner1} />
						<Card.Body>
							<Card.Title>Fashion</Card.Title>
							<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus!</Card.Text>
							<Button variant="secondary">Shop Now</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} lg={3} className="mb-4">
					<Card className="shadow">
						<Card.Img variant="top" src={Banner2} />
						<Card.Body>
							<Card.Title>Electronics</Card.Title>
							<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus!</Card.Text>
							<Button variant="secondary">Shop Now</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} lg={3} className="mb-4">
					<Card className="shadow">
						<Card.Img variant="top" src={Banner3} />
						<Card.Body>
							<Card.Title>Personal care</Card.Title>
							<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus!</Card.Text>
							<Button variant="secondary">Shop Now</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6} lg={3} className="mb-4">
					<Card className="shadow">
						<Card.Img variant="top" src={Banner4} />
						<Card.Body>
							<Card.Title>Household</Card.Title>
							<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus!</Card.Text>
							<Button variant="secondary">Shop Now</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default CategoryBanner;
