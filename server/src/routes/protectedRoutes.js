// import React from "react";
// import { Redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Cart from "../views/Cart/Cart";

var PrivateRoutes = [
  {
    path: "/cart",
    layout: BaseLayout,
    component: Cart,
  },
];

export default PrivateRoutes;
