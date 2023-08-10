import {
	GET_ALL_PRODUCTS_INITIATE,
	GET_ALL_PRODUCTS_SUCCESS,
	GET_ALL_PRODUCTS_FAIL,
	GET_PRODUCTS_BY_CATEGORY_INITIATE,
	GET_PRODUCTS_BY_CATEGORY_SUCCESS,
	GET_PRODUCTS_BY_CATEGORY_FAIL,
	GET_PRODUCT_INITIATE,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCT_FAIL,
	APPLY_FILTERS_INITIATE,
	APPLY_FILTERS_SUCCESS,
	APPLY_FILTERS_FAIL,
	SEARCH_INITIATE,
	SEARCH_SUCCESS,
	SEARCH_FAIL,
} from "../actionTypes/product";
import { fetchAllProducts, fetchProductByCategory, fetchProductById, fetchSearchResults } from "../../api/index";

export const getAllProducts = () => async (dispatch) => {
	dispatch({ type: GET_ALL_PRODUCTS_INITIATE });

	try {
		const response = await fetchAllProducts();
		dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: { error } });
		return error;
	}
};

export const getProductsByCategory = (category) => async (dispatch) => {
	dispatch({ type: GET_PRODUCTS_BY_CATEGORY_INITIATE });

	try {
		const response = await fetchProductByCategory(category);
		dispatch({ type: GET_PRODUCTS_BY_CATEGORY_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: GET_PRODUCTS_BY_CATEGORY_FAIL, payload: { error } });
		return error;
	}
};

export const getProductById = (id) => async (dispatch) => {
	dispatch({ type: GET_PRODUCT_INITIATE });

	try {
		const response = await fetchProductById(id);
		dispatch({ type: GET_PRODUCT_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: GET_PRODUCT_FAIL, payload: { error } });
		return error;
	}
};

export const getSearchResults = (text) => async (dispatch) => {
	dispatch({ type: SEARCH_INITIATE });

	try {
		const response = await fetchSearchResults(text);
		dispatch({ type: SEARCH_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: SEARCH_FAIL, payload: { error } });
		return error;
	}
};

export const getFilteredResults = (filterString) => async (dispatch) => {
	dispatch({ type: APPLY_FILTERS_INITIATE });

	try {
		const response = await fetchSearchResults(filterString);
		dispatch({ type: APPLY_FILTERS_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: APPLY_FILTERS_FAIL, payload: { error } });
		return error;
	}
};
