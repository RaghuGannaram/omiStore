import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Alert, Button } from "react-bootstrap";

function PageNotFound() {
	const history = useHistory();

	return (
		<Container className="mt-5">
			<Alert variant="danger">
				<Alert.Heading className="text-center">404 - PAGE NOT FOUND</Alert.Heading>
				<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
				<hr />
				<div className="d-flex justify-content-end">
					<Button variant="outline-success" onClick={() => history.push("/")}>
						Go back to Home
					</Button>
				</div>
			</Alert>
		</Container>
	);
}

export default PageNotFound;
