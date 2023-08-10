import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { DEFAULT_RULE, EMAIL_RULE } from "../../utils/Validator/rule";
import Validator from "../../utils/Validator";
import { userLogin } from "../../redux/actions";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async () => {
		const { email, password } = this.state;

		if (!Validator(email, EMAIL_RULE)) {
			console.log("email Error");
			return;
		}
		if (!Validator(password, DEFAULT_RULE)) {
			console.log("Password Error");
			return;
		}

		try {
			const response = await this.props.userLogin(email, password);
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
							<i className="fa fa-envelope"></i> Email
						</Form.Label>
						<Form.Control type="text" placeholder="Enter email " id="UserName" name="email" value={this.state.email} onChange={this.handleChange} />
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
							Log in
						</Button>
					</Form.Group>
					<Form.Group className="my-2">
						<Form.Text onClick={this.props.registerClicked}>
							New user ? Please&nbsp;
							<a className="link-primary" href="/register">
								Register
							</a>
						</Form.Text>
					</Form.Group>
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	loginLoading: state.login.loginLoading,
	loginError: state.login.loginError,
});

const mapDispatchToProps = {
	userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
