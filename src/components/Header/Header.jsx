/** @format */
import "./Header.css";
import img from "../../assets/images/logo.png";
import img1 from "../../assets/images/Vector.png";
import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoginModalfirst,
  LoginModallogin,
  LoginModalSecond,
  LoginModalsignup,
  SidebarCanvas,
} from "../Modals/Modals";
import { useEffect, useState } from "react";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated, LOGOUT } from "../../store/authSlice.js";
import notification_img from "../../assets/images/notification.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

const default_user_avatar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMg_4QMb_SkaPs0XXddwSldTXcgQCi2tdk0w&s";

const Header = () => {
  const [categories, setCategories] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();
  const [openCanvas, setOpenCanvas] = useState(false);

  const fetchProfile = () => {
    getApi(endPoints.auth.getProfile, {
      setResponse: setProfile,
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProfile();
    }
  }, [isLoggedIn]);

  const fetchCategories = () => {
    getApi(endPoints.getCategories, {
      setResponse: setCategories,
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const toggle = () => {
    setShow(false);
    setShow1(true);
  };
  const toggle1 = () => {
    setShow1(false);
    setShow2(true);
  };
  const toggle2 = () => {
    setShow1(true);
    setShow2(false);
    setShow3(false);
  };
  const toggle3 = () => {
    setShow1(false);
    setShow3(true);
  };

  function logoutHandler() {
    dispatch(LOGOUT());
    navigate("/");
  }

  return (
    <>
      <SidebarCanvas
        show={openCanvas}
        handleClose={() => setOpenCanvas(false)}
      />
      <LoginModalfirst
        show={show}
        onHide={() => setShow(false)}
        shownext={toggle}
      />
      <LoginModalSecond
        show={show1}
        onHide={() => setShow1(false)}
        shownext={toggle1}
        shownext1={toggle3}
      />
      <LoginModallogin
        show={show2}
        onHide={() => setShow2(false)}
        shownext={toggle2}
      />
      <LoginModalsignup
        show={show3}
        onHide={() => setShow3(false)}
        shownext={toggle2}
      />
      <header className="navbar-container">
        <div className="navbar-top-div">
          <div className="navbar-left">
            <div className="navbar-logo">
              <img src={img} alt="" />
            </div>
            <div className="navbar-searchbar-container">
              <div className="navbar-searchbar-div">
                <input type="text" placeholder="Search for sale" />
                <select name="" id="">
                  <option value="">For Sale</option>
                  <option value="">For Sale</option>
                  <option value="">For Sale</option>
                </select>
                <div className="navbar-searchbar-icon">
                  <IoSearch color="#FFFFFF" size={28} />
                </div>
              </div>
              <div className="navbar-location">
                <span>
                  {" "}
                  <IoLocationSharp /> Nearby + Shipping <FaTruck />{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="navbar-right">
            <div className="navbar-getapp">
              <button>Get the app</button>
            </div>
            <div className="navbar-right-items">
              {isLoggedIn ? (
                <ul className="links">
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className={location.pathname === "/chat" ? "active" : ""}>
                    <Link to={"/chat"}>Chat</Link>
                  </li>
                  <li className={location.pathname === "/post" ? "active" : ""}>
                    <Link to={"/post"}>Post</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/mylisting" ? "active" : ""
                    }
                  >
                    <Link to={"/mylisting"}>My Listing</Link>
                  </li>
                </ul>
              ) : (
                <ul className="links">
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li onClick={() => setShow(true)}>Chat</li>
                  <li onClick={() => setShow(true)}>Post</li>
                  <li onClick={() => setShow(true)}>My Listing</li>
                </ul>
              )}

              {isLoggedIn && (
                <img
                  src={
                    profile?.data?.image
                      ? profile?.data?.image
                      : default_user_avatar
                  }
                  alt="user_avatar"
                  className="user_avatar"
                />
              )}

              {isLoggedIn && (
                <img
                  src={notification_img}
                  alt=""
                  className="notification_icon"
                />
              )}

              {isLoggedIn ? (
                <div className="navbarlogin" onClick={() => logoutHandler()}>
                  <p>Log out</p>
                </div>
              ) : (
                <div className="navbarlogin" onClick={() => setShow(true)}>
                  <p>Log in</p>
                </div>
              )}

              <div className="ham_menu">
                <FaBarsStaggered onClick={() => setOpenCanvas(true)} />
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-bottom-div">
          <div className="navbar-bottom-job">
            <h6>Find a Job</h6>
            <img src={img1} alt="" />
          </div>
          <nav className="navbar-bottom-items">
            <ul>
              <Swiper
                className="custom-swiper"
                spaceBetween={20}
                slidesPerView={"auto"}
              >
                {categories?.data?.map((item) => (
                  <SwiperSlide style={{ width: "auto" }} key={item?._id}>
                    <li>
                      <Link to={`/category/${item?.name}?id=${item?._id}`}>
                        {item?.name}
                      </Link>
                    </li>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
