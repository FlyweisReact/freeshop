/** @format */

import AboutUs from "../pages/About Us/AboutUs";
import Autodealerships from "../pages/Auto dealerships/Autodealerships";
import Blog from "../pages/Blog/Blog";
import Careers from "../pages/careers/Careers";
import Chat from "../pages/Chat/Chat";
import BrowseList from "../pages/Explore/Explore";
import FindJobs from "../pages/Find Jobs/FindJobs";
import JobDetails from "../pages/Find Jobs/JobDetails";
import Help from "../pages/Help/Help";
import MyListing from "../pages/My Listing/MyListing";
import EditPost from "../pages/Post/EditPost";
import Post from "../pages/Post/Post";
import Press from "../pages/Press/Press";
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
    route: "/product/:name",
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
  {
    route: "/auto-dealerships",
    component: Autodealerships,
  },
  {
    route: "/blog",
    component: Blog,
  },
  {
    route: "/press",
    component: Press,
  },
  {
    route: "/help",
    component: Help,
  },
  {
    route: "/mylisting",
    component: MyListing,
  },
  {
    route: "/careers",
    component: Careers,
  },
  {
    route: "/jobs",
    component: FindJobs,
  },
  {
    route: "/jobs/details",
    component: JobDetails,
  },
  {
    route: "/edit-post/:id",
    component: EditPost,
  },
];

export default allRoutes;
    