import React from "react";
import { connect } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faComputer, faHouseChimney, faShirt, faSmile, faUser } from "@fortawesome/free-solid-svg-icons";
import { userLogout } from "../../redux/actions/loginActions";
import Auth from "../../modules/Authentication";

function Navigation(props) {
	const logout = () => {
		props.userLogout();
		Auth.removeUserToken();
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="pt-3 mb-2">
			<Container fluid className="px-5">
				<Navbar.Brand href="/home">Omi Store</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/offers">Special Offers</Nav.Link>
						<NavDropdown title="Department" id="collasible-nav-dropdown-parent">
							<NavDropdown
								title={
									<span className="px-2">
										<FontAwesomeIcon icon={faShirt} /> Cloths
									</span>
								}
								id="collasible-nav-dropdown-child-1"
								drop="end"
							>
								<NavDropdown.Item href="/department/cloths">Men</NavDropdown.Item>
								<NavDropdown.Item href="/department/cloths2">Women</NavDropdown.Item>
								<NavDropdown.Item href="/department/cloths">Kids</NavDropdown.Item>
								<NavDropdown.Item href="/department/cloths">Accessories</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown.Divider />
							<NavDropdown
								title={
									<span className="px-2">
										<FontAwesomeIcon icon={faComputer} /> Electronics
									</span>
								}
								id="collasible-nav-dropdown-child-2"
								drop="end"
							>
								<NavDropdown.Item href="/department/electronics">Mobiles</NavDropdown.Item>
								<NavDropdown.Item href="/department/electronics">Laptops & PC</NavDropdown.Item>
								<NavDropdown.Item href="/department/electronics">Gaming Consoles</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown.Divider />
							<NavDropdown
								title={
									<span className="px-2">
										<FontAwesomeIcon icon={faSmile} /> Personal Care
									</span>
								}
								id="collasible-nav-dropdown-child-3"
								drop="end"
							>
								<NavDropdown.Item href="/department/personal-care">Cosmetics</NavDropdown.Item>
								<NavDropdown.Item href="/department/personal-care">Perfumes</NavDropdown.Item>
								<NavDropdown.Item href="/department/personal-care">Moisterizers</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown.Divider />
							<NavDropdown
								title={
									<span className="px-2">
										<FontAwesomeIcon icon={faHouseChimney} /> Householde
									</span>
								}
								id="collasible-nav-dropdown-child-4"
								drop="end"
							>
								<NavDropdown.Item href="/department/household">Kitchen</NavDropdown.Item>
								<NavDropdown.Item href="/department/household">Furniture</NavDropdown.Item>
							</NavDropdown>
						</NavDropdown>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav>
					<Nav>
						{!props.authenticated ? (
							<Nav.Link href="/login">
								<FontAwesomeIcon icon={faUser} className="px-2" /> Login
							</Nav.Link>
						) : (
							<Nav.Link role={"button"} onClick={() => logout()}>
								<FontAwesomeIcon icon={faUser} className="px-2" /> Logout
							</Nav.Link>
						)}

						<Nav.Link href="/cart">
							<FontAwesomeIcon icon={faCartShopping} className="px-2" /> Cart
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

const mapStateToProps = (state) => ({
	authenticated: state.login.loginStatus,
});

const mapDispatchToProps = {
	userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
