import { LOGIN_INITIATE, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, INSERT_TOKEN_SUCCESS, INSERT_TOKEN_FAIL } from "../actionTypes/login";
import { login } from "../../api/index";

export const userLogin = (email, password) => async (dispatch) => {
	dispatch({ type: LOGIN_INITIATE });

	try {
		const response = await login(email, password);
		dispatch({ type: LOGIN_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: LOGIN_FAIL, payload: { error } });
		throw error;
	}
};

export const userLogout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};

export const refreshLogin = () => (dispatch) => {
	dispatch({type: LOGIN_SUCCESS})
};

export const insertToken = () => (dispatch) => {
	let token;

	if (localStorage.getItem("omi-stores-auth")) {
		token = JSON.parse(localStorage.getItem("omi-stores-auth"));
		dispatch({ type: INSERT_TOKEN_SUCCESS, payload: token });
	} else {
		dispatch({ type: INSERT_TOKEN_FAIL });
	}
};
