/** @format */

import AboutUs from "../pages/About Us/AboutUs";
import Chat from "../pages/Chat/Chat";
import BrowseList from "../pages/Explore/Explore";
import Post from "../pages/Post/Post";
import ProductDetails from "../pages/ProductDetail/ProductDetails";
import ProductList from "../pages/ProductList/ProductList";
import Thanks from "../pages/Thankyou/Thanks";
import TrustSection from "../pages/Trust & safety/Trustsafety";
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
    {
        route: "/aboutus",
        component: AboutUs,
    },
    {
        route: "/post",
        component: Post,
    },
    {
        route: "/post/thank-you",
        component: Thanks,
    },
    {
        route: "/explore",
        component: BrowseList,
    },
    {
        route: "/trust-safety",
        component: TrustSection,
    },
];

export default allRoutes;