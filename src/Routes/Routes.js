/** @format */

import ProductList from "../pages/ProductList/ProductList";
import Home from "/src/pages/Home/Home.jsx";



const allRoutes = [
    {
        route: "/",
        component: Home,
    },
    {
        route: "/category/:categoryName",
        component: ProductList,
    },
];

export default allRoutes;