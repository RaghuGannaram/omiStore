 import {
  GET_VARIANTS_QUERY_INITIATE,
  GET_VARIANTS_QUERY_SUCCESS,
  GET_VARIANTS_QUERY_FAIL
} from "../actionTypes/variant";

const initialState = {
  variantsLoading: false,
  variants: null,
  variantsError: null
};

export default function variantReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VARIANTS_QUERY_INITIATE:
      return {
        ...state,
        variantsLoading: true,
        variantsError: null
      };
    case GET_VARIANTS_QUERY_SUCCESS:
      return {
        ...state,
        variantsLoading: false,
        variants: action.payload.data.variants
      };
    case GET_VARIANTS_QUERY_FAIL:
      return {
        ...state,
        variantsLoading: false,
        variantsError: action.payload.error
      };
    default:
      return state;
  }
};
