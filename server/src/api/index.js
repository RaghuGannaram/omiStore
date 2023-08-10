import httpInstance from "../configs/axios.config";
import Auth from "../modules/Authentication";

export const register = async (fullname, email, password, verifyPassword) => {
	try {
		const response = await httpInstance({
			method: "POST",
			url: "/users/register",
			data: { fullname, email, password, verifyPassword },
		});
		Auth.setUserToken(response.data.user_token);
		return response;
	} catch (error) {
		throw error;
	}
};

export const login = async (email, password) => {
	try {
		const response = await httpInstance({
			method: "POST",
			url: "/users/login",
			data: { email, password },
		});
		Auth.setUserToken(response.data.user_token);
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchAllProducts = async () => {
	try {
		const response = await httpInstance({
			method: "GET",
			url: `/products`,
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchProductByCategory = async (category) => {
	try {
		const response = httpInstance({
			method: "GET",
			url: `/products?category=${category}`,
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchProductById = async (id) => {
	try {
		const response = await httpInstance({
			method: "GET",
			url: `/products/${id}`,
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchSearchResults = async (text) => {
	try {
		const response = await httpInstance({
			method: "GET",
			url: `/search?query=${text}`,
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchFilteredResults = async (filterString) => {
	try {
		const response = await httpInstance({
			method: "GET",
			url: `/products?${filterString}`,
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchCartByUserId = async (userId) => {
	try {
		const response = await httpInstance({
			method: "GET",
			url: `/users/${userId}/cart`,
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const updateCart = async (userId, productId, increase, decrease) => {
	let token = Auth.getUserToken();
	console.log(token)
	try {
		const response = await httpInstance({
			method: "POST",
			url: `/users/${userId}/cart`,
			data: { userId, productId, increase, decrease },
			headers: {"authorization": `Bearer ${token}`}
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchAllDepartments = async () => {
	try {
		const response = await httpInstance({
			method: "GET",
			url: "/departments",
		});
		return response;
	} catch (error) {
		throw error;
	}
};

export const fetchVariantsByProductId = async (productId) => {
	try {
		const response = await httpInstance({
			method: "GET",
			url: `/variants?productId=${productId}`,
		})
		return response;
	} catch (error) {
		throw error;
	}
};
