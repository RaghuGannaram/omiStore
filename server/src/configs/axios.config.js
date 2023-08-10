import axios from "axios";

const httpInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 1000,
	headers: { "x-application-name": "ecom-express" },
});

export default httpInstance;
