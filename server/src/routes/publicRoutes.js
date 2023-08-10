import React from "react";
import { Redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../views/Home";
import Login from "../views/Authentication/Login";
import Registration from "../views/Authentication/Register";
import ProductDetails from "../views/ProductDetails";
import Category from "../views/Category/Category";

var routes = [
  {
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },
  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/" />,
  },
  {
    path: "/login",
    layout: BaseLayout,
    component: Login,
  },
  {
    path: "/register",
    layout: BaseLayout,
    component: Registration,
  },
  {
    path: "/product/:id",
    layout: BaseLayout,
    component: ProductDetails,
  },
  {
    path: "/shop/:category",
    layout: BaseLayout,
    component: Category,
  },
];

export default routes;
