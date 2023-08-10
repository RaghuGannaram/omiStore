import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

function Footer() {
	return (
		<>
			<Row className="text-center text-lg-start bg-light text-muted mt-5">
				<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<div className="me-5 d-none d-lg-block">
						<span>Get connected with us on social networks:</span>
					</div>
					<div>
						<a href="#" className="me-4 text-reset">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="me-4 text-reset">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" className="me-4 text-reset">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</section>
				<section className="">
					<div className="container text-center text-md-start mt-5">
						<div className="row mt-3">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									<i className="fas fa-store me-3"></i>Omi Store
								</h6>
								<p>
									Omi Stores is growing exponentially by gaining customers trust. Our goal is to deliver the products on time. Assuring the
									customers with quality deliverables
								</p>
							</div>
							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Products</h6>
								<p>
									<a href="#!" className="text-reset">
										Fashion
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Electronics
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Personal Care
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Household
									</a>
								</p>
							</div>
							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
								<p>
									<a href="#!" className="text-reset">
										Settings
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Orders
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										About
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Help
									</a>
								</p>
							</div>
							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
								<p>
									<i className="fas fa-home me-3"></i> Hyderabad, Telangana, India
								</p>
								<p>
									<i className="fas fa-envelope me-3"></i> mail@omi-stores.com
								</p>
								<p>
									<i className="fas fa-phone me-3"></i> + 91 912345678
								</p>
								<p>
									<i className="fas fa-print me-3"></i> + 91 912345679
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className="text-center p-4">
					© 2022 Copyright:
					<a className="text-reset fw-bold" href="https://omi-stores.com/">
						omi-stores.com
					</a>
				</div>
			</Row>
		</>
	);
}

export default Footer;
