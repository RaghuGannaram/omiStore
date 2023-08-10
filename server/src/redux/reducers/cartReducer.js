import {
	GET_CART_BY_USERID_INITIATE,
	GET_CART_BY_USERID_SUCCESS,
	GET_CART_BY_USERID_FAIL,
	POST_CART_INITIATE,
	POST_CART_SUCCESS,
	POST_CART_FAIL,
} from "../actionTypes/cart";

const initialState = {
	cartLoading: false,
	cart: {},
	cartError: {},
};

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case POST_CART_INITIATE:
			return {
				...state,
				cartLoading: true,
				cartError: {},
			};
		case POST_CART_SUCCESS:
			return {
				...state,
				cart: action.payload.data.cart,
				cartLoading: false,
			};
		case POST_CART_FAIL:
			return {
				...state,
				cartLoading: false,
				cartError: action.payload.error.response.data,
			};
		case GET_CART_BY_USERID_INITIATE:
			return {
				...state,
				cartLoading: true,
				cartError: {},
			};
		case GET_CART_BY_USERID_SUCCESS:
			return {
				...state,
				cart: action.payload.data.cart,
				cartLoading: false,
			};
		case GET_CART_BY_USERID_FAIL:
			return {
				...state,
				cartLoading: false,
				cartError: action.payload.error.response.data,
			};
		default:
			return state;
	}
}
