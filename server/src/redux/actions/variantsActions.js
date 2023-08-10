import { GET_VARIANTS_QUERY_INITIATE, GET_VARIANTS_QUERY_SUCCESS, GET_VARIANTS_QUERY_FAIL } from "../actionTypes/variant";
import { fetchVariantsByProductId } from "../../api";

export const getVariantsByProductId = (productId) => (dispatch) => {
	dispatch({ type: GET_VARIANTS_QUERY_INITIATE });

	try {
		const response = fetchVariantsByProductId(productId);
		dispatch({ type: GET_VARIANTS_QUERY_SUCCESS, payload: response });
		return response;
	} catch (error) {
		dispatch({ type: GET_VARIANTS_QUERY_FAIL, payload: { error } });
		return error;
	}
};
