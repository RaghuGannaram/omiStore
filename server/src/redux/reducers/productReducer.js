 
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
  SEARCH_INITIATE,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  APPLY_FILTERS_INITIATE,
  APPLY_FILTERS_SUCCESS,
  APPLY_FILTERS_FAIL
} from "../actionTypes/product";

const initialState = {
  productLoading: false,
  products: null,
  product: null,
  productError: null
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS_INITIATE:
      return {
        ...state,
        productLoading: true,
        productError: null
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        productLoading: false,
        products: action.payload.data.products
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        productLoading: false,
        productError: action.payload.error.response.data
      };
    case GET_PRODUCT_INITIATE:
      return {
        ...state,
        productLoading: true,
        productError: null
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productLoading: false,
        product: action.payload.data.product
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        productLoading: false,
        productError: action.payload.error.response.data
      };
    case GET_PRODUCTS_BY_CATEGORY_INITIATE:
      return {
        ...state,
        productLoading: true,
        productError: null
      };
    case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        productLoading: false,
        products: action.payload.data.products
      };
    case GET_PRODUCTS_BY_CATEGORY_FAIL:
      return {
        ...state,
        productLoading: false,
        productError: action.payload.error.response.data
      };
    case SEARCH_INITIATE:
      return {
        ...state,
        productLoading: true,
        productError: null
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        productLoading: false,
        products: action.payload.data.products
      };
    case SEARCH_FAIL:
      return {
        ...state,
        productLoading: false,
        productError: action.payload.error.response.data
      };
    case APPLY_FILTERS_INITIATE:
      return {
        ...state,
        productLoading: true,
        productError: null
      };
    case APPLY_FILTERS_SUCCESS:
      return {
        ...state,
        productLoading: false,
        products: action.payload.data.products
      };
    case APPLY_FILTERS_FAIL:
      return {
        ...state,
        productLoading: false,
        productError: action.payload.error.response.data
      };
    default:
      return state;
  }
};
