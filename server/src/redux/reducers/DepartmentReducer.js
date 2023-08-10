import { GET_DEPARTMENTS_INITIATE, GET_DEPARTMENTS_SUCCESS, GET_DEPARTMENTS_FAIL } from "../actionTypes/department";

const initialState = {
	departmentLoading: false,
	departments: null,
	departmentError: null,
};

export default function departmentReducer(state = initialState, action) {
	switch (action.type) {
		case GET_DEPARTMENTS_INITIATE:
			return {
				departmentLoading: true,
				departmentError: null,
			};
		case GET_DEPARTMENTS_SUCCESS:
			return {
				departmentLoading: false,
				departments: action.payload.data.departments,
			};
		case GET_DEPARTMENTS_FAIL:
			return {
				departmentLoading: false,
				departmentError: action.payload.error.response.data,
			};
		default:
			return state;
	}
}
