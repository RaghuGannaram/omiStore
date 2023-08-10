import { REGISTER_INITIATE, REGISTER_SUCCESS, REGISTER_FAIL } from "../actionTypes/registration";

const initialState = {
	registrationLoading: false,
	registrationError: {},
};

export default function registrationReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER_INITIATE:
			return {
				...state,
				registrationLoading: true,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				registrationLoading: false,
			};
		case REGISTER_FAIL:
			return {
				...state,
				registrationLoading: false,
				registrationError: action.payload.error.response.data,
			};
		default:
			return state;
	}
}
