/** @format */

import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
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
import Home from "../pages/Home/Home";

const allRoutes = [
  {
    layout: null,
    routes: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:categoryName",
        element: <ProductList />,
      },
      {
        path: "/product/:name",
        element: <ProductDetails />,
      },

      {
        path: "/aboutus",
        element: <AboutUs />,
      },

      {
        path: "/explore",
        element: <BrowseList />,
      },
      {
        path: "/trust-safety",
        element: <TrustSection />,
      },
      {
        path: "/auto-dealerships",
        element: <Autodealerships />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/press",
        element: <Press />,
      },
      {
        path: "/help",
        element: <Help />,
      },

      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/jobs",
        element: <FindJobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
    ],
  },
  {
    layout: ProtectedRoutes,
    routes: [
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/post",
        element: <Post />,
      },

      {
        path: "/post/thank-you",
        element: <Thanks />,
      },
      {
        path: "/mylisting",
        element: <MyListing />,
      },
      {
        path: "/edit-post/:id",
        element: <EditPost />,
      },
    ],
  },
];

export default allRoutes;
