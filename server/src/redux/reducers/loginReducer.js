import { LOGIN_INITIATE, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actionTypes/login";

const initialState = {
	loginLoading: false,
	loginStatus: false,
	loginError: {},
};

export default  function loginReducer (state = initialState, action) {
	switch (action.type) {
		case LOGIN_INITIATE:
			return {
				...state,
				loginLoading: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loginLoading: false,
				loginStatus: true,
			};
		case LOGIN_FAIL:
			return {
				...state,
				loginLoading: false,
				loginError: action.payload.error.response.data,
			};
		case LOGOUT:
			return {
				...state,
				loginStatus: false,
			};
		default:
			return state;
	}
};
