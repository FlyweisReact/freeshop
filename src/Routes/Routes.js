/** @format */

import Chat from "../pages/Chat/Chat";
import ProductDetails from "../pages/ProductDetail/ProductDetails";
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
    {
        route: "/product",
        component: ProductDetails,
    },
    {
        route: "/chat",
        component: Chat,
    },
];

export default allRoutes;