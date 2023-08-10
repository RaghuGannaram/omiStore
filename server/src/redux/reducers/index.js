 
import { combineReducers } from "redux";
import register from "./registrationReducer";
import login from "./loginReducer";
import product from "./productReducer";
import department from "./DepartmentReducer";
import variant from "./variantsReducer";
import cart from "./cartReducer";
// import checkout from './checkoutReducer'
// import filter from './filterReducer'

export default combineReducers({
  register,
  login,
  product,
  department,
  variant,
  cart
});
