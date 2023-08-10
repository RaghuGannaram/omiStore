import { REGISTER_INITIATE, REGISTER_SUCCESS, REGISTER_FAIL } from "../actionTypes/registration";
import { register } from "../../api/index";

export const userRegister = (fullname, email, password, verifyPassword) => async (dispatch) => {
	dispatch({ type: REGISTER_INITIATE });

	try {
		const response = await register(fullname, email, password, verifyPassword);
		dispatch({ type: REGISTER_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: REGISTER_FAIL, payload: { error } });
		throw error;
	}
};
