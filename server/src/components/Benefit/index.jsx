import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faIndianRupeeSign, faHome, faReceipt } from "@fortawesome/free-solid-svg-icons";
import giftsIcon from "../../assets/svg/gifts.svg";
import homeIcon from "../../assets/svg/sweet-home.svg";
import discountIcon from "../../assets/svg/discount.svg";
import truckIcon from "../../assets/svg/delivery-truck.svg";

function Benefit() {
	return (
		<Container className="my-5">
			<Row className="mt-5 bg-light shadow">
				<Tabs defaultActiveKey="freeShipping" id="key-features" className="mb-4" fill>
					<Tab
						eventKey="freeShipping"
						title={
							<span className="px-2">
								<FontAwesomeIcon icon={faTruck} />  Free shipping
							</span>
						}
					>
						<Row>
							<Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
								<p>Enjoy ultimate shopping with free shipping on orders above &#x20B9;1000</p>
							</Col>
							<Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
								<img src={truckIcon} alt="Delivery" style={{ height: "250px", width: "100%" }} />
							</Col>
						</Row>
					</Tab>
					<Tab
						eventKey="rewardProgram"
						title={
							<span className="px-2">
								<FontAwesomeIcon icon={faReceipt} /> Reward program
							</span>
						}
					>
						<Row>
							<Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
								<p>Join our exciting reward program</p>
							</Col>
							<Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
								<img src={giftsIcon} alt="Shopping" style={{ height: "250px", width: "100%" }} />
							</Col>
						</Row>
					</Tab>
					<Tab
						eventKey="discounts"
						title={
							<span className="px-2">
								<FontAwesomeIcon icon={faIndianRupeeSign} /> 70% discount
							</span>
						}
					>
						<Row>
							<Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
								<p>Enjoy as much as 70% discounts on selected items</p>
							</Col>
							<Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
								<img src={discountIcon} alt="discount" style={{ height: "250px", width: "100%" }} />
							</Col>
						</Row>
					</Tab>
					<Tab
						eventKey="omiStoreAssured"
						title={
							<span className="px-2">
								<FontAwesomeIcon icon={faHome} /> Omi Store Assured
							</span>
						}
					>
						<Row>
							<Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
								<p>User friendly Replacement & Return policies</p>
							</Col>
							<Col md={6} xs={12} className="d-flex justify-content-center align-items-center">
								<img src={homeIcon} alt="home" style={{ height: "250px", width: "100%" }} />
							</Col>
						</Row>
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
}

export default Benefit;
