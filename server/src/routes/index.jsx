import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../modules/Authentication";
import publicRoutes from "./publicRoutes";
import protectedRoutes from "./protectedRoutes";
import PageNotFound from "../views/PageNotFound";

const PrivateRouter = ({ component, ...options }) => {
	const finalComponent = Auth.getUserToken() !== undefined ? <Route {...options} component={component} /> : <Redirect to="/PageNotFound" />;
	return finalComponent;
};

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Switch>
					{publicRoutes.map((homeRoute, index) => {
						return (
							<Route
								key={index}
								path={homeRoute.path}
								exact={homeRoute.exact}
								component={(props) => (
									<homeRoute.layout {...props}>
										<homeRoute.component {...props} />
									</homeRoute.layout>
								)}
							/>
						);
					})}
					{protectedRoutes.map((privateRoute, index) => {
						return (
							<PrivateRouter
								key={index}
								path={privateRoute.path}
								exact={privateRoute.exact}
								component={(props) => (
									<privateRoute.layout {...props}>
										<privateRoute.component {...props} />
									</privateRoute.layout>
								)}
							/>
						);
					})}
					<Route to="/PageNotFound" component={PageNotFound} />
				</Switch>
			</div>
		);
	}
}

export default Routes;
