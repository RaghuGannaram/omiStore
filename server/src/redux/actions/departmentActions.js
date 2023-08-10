import { GET_DEPARTMENTS_INITIATE, GET_DEPARTMENTS_SUCCESS, GET_DEPARTMENTS_FAIL } from "../actionTypes/department";
import { fetchAllDepartments } from "../../api";

export const getAllDepartments = () => async (dispatch) => {
	dispatch({ type: GET_DEPARTMENTS_INITIATE });

	try {
		const response = await fetchAllDepartments();
		dispatch({ type: GET_DEPARTMENTS_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: GET_DEPARTMENTS_FAIL, payload: { error } });
		return error;
	}
};
