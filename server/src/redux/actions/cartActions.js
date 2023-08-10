import {
	POST_CART_INITIATE,
	POST_CART_SUCCESS,
	POST_CART_FAIL,
	GET_CART_BY_USERID_INITIATE,
	GET_CART_BY_USERID_SUCCESS,
	GET_CART_BY_USERID_FAIL,
} from "../actionTypes/cart";
import { fetchCartByUserId, updateCart } from "../../api";
import Auth from "../../modules/Authentication";

export const getCartByUserId = () => async (dispatch) => {
	let userId = Auth.getUserId();
	dispatch({ type: GET_CART_BY_USERID_INITIATE });

	try {
		const response = await fetchCartByUserId(userId);
		dispatch({ type: GET_CART_BY_USERID_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: GET_CART_BY_USERID_FAIL, payload: { error } });
		return error;
	}
};

export const updateCartItems = (productId, increase, decrease) => async (dispatch) => {
	let userId = Auth.getUserId();
	dispatch({ type: POST_CART_INITIATE });

	try {
		const response = await updateCart(userId, productId, increase, decrease);
		dispatch({ type: POST_CART_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: POST_CART_FAIL, payload: { error } });
		return error;
	}
};
