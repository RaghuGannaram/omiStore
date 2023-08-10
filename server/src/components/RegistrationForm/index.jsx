import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { userRegister } from "../../redux/actions/registrationActions";
import Validator from "../../utils/Validator";
import { DEFAULT_RULE, EMAIL_RULE } from "../../utils/Validator/rule";

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = { fullname: "", email: "", password: "" };
	}
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async () => {
		const { fullname, email, password } = this.state;
		if (!Validator(fullname, DEFAULT_RULE)) {
			console.log("Name Error");
			return;
		}
		if (!Validator(email, EMAIL_RULE)) {
			console.log("email Error");
			return;
		}
		if (!Validator(password, DEFAULT_RULE)) {
			console.log("Password Error");
			return;
		}
		try {
			const response = await this.props.userRegister(fullname, email, password, password);
			console.log(response);
			this.props.history.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<Container>
				<Form className="my-5">
					<Form.Group className="my-4">
						<Form.Label>
							<i className="fa fa-user"></i> Name
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter name "
							id="name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<Form.Group className="my-4">
						<Form.Label>
							<i className="fa fa-envelope"></i> Email
						</Form.Label>
						<Form.Control type="text" placeholder="Enter email " id="email" name="email" value={this.state.email} onChange={this.handleChange} />
					</Form.Group>

					<Form.Group className="my-4">
						<Form.Label>
							<i className="fa fa-lock"></i> Password
						</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter password"
							id="Passwod"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group className="my-2 text-center">
						<Button type="button" className="btn-primary " loading={this.state.loading} onClick={() => this.handleSubmit()}>
							Register
						</Button>
					</Form.Group>
					<Form.Group className="my-2">
						<Form.Text onClick={this.props.loginClicked}>
							Already have an account ? Please&nbsp;
							<a className="link-primary" href="/login">
								Login
							</a>
						</Form.Text>
					</Form.Group>
				</Form>
			</Container>
		);
	}
}

const mapStoreToProps = (state) => ({
	registrationLoading: state.register.registrationLoading,
	registrationError: state.register.registrationError,
});

const mapDispatchToProps = {
	userRegister,
};

export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(RegisterForm));
