/** @format */

import "./Footer.css";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { JObsmodal } from "../Modals/Modals";

const Footer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <JObsmodal show={isOpen} onHide={() => setIsOpen(false)} />
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-main-div">
            <div className="footer-main-div-left">
              <div className="footer-main-links">
                <h6>Shop</h6>
                <ul>
                  <li onClick={() => navigate("/aboutus")}>How it works</li>
                  <li onClick={() => navigate("/explore")}>Explore</li>
                  <li onClick={() => navigate("/trust-safety")}>
                    Trust & safety
                  </li>
                  <li>Safe trade spots</li>
                </ul>
              </div>
              <div className="footer-main-links">
                <h6>Sell</h6>
                <ul>
                  <li onClick={() => navigate("/post")}>Post an item</li>
                  <li onClick={() => navigate("/auto-dealerships")}>
                    Auto dealerships
                  </li>
                </ul>
              </div>
              <div className="footer-main-links">
                <h6>Jobs</h6>
                <ul>
                  <li>Post job</li>
                  <li onClick={() => setIsOpen(true)}>Find a job</li>
                  <li>Browse jobs</li>
                </ul>
              </div>
              <div className="footer-main-links">
                <h6>About</h6>
                <ul>
                  <li>Our story</li>
                  <li onClick={() => navigate("/careers")}>Careers</li>
                  <li onClick={() => navigate("/press")}>Press</li>
                </ul>
              </div>
              <div className="footer-main-links">
                <h6>Help</h6>
                <ul>
                  <li onClick={() => navigate("/help")}>Help center</li>
                  <li>Community</li>
                  <li onClick={() => navigate("/blog")}>Blog</li>
                </ul>
              </div>
            </div>
            <div className="footer-main-div-right">
              <div className="navbar-getapp">
                <button>Get the app</button>
              </div>
              <div className="footer-main-right-socilinks">
                <RiTwitterXFill />
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="footer-bottom-div">
            <p>© 2024 OfferUp Inc.</p>
            <span>
              Terms of Service/Privacy Policy/Do Not Sell or Share My Personal
              Information
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
