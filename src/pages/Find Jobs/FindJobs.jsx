import "./FindJobs.css";
import trustImage from "../../assets/images/img52.jpg";

import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";


import img from '../../assets/images/img54.jpg'
import img1 from '../../assets/images/img55.jpg'
import img2 from '../../assets/images/img57.jpg'
import { Link } from "react-router-dom";



const FindJobs = () => {
  const category = [
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
  ];

  return (
    <>
      <div className="blog-container">
        <div className="blog-top">
          <div className="blog-top-left">
            <div className="blog-top-left-top">
              <span>HOW IT WORKS</span>
            </div>
            <h1>See Jobs Available for You</h1>
            <p>Freeshopps is the simplest, most trusted way to find jobs locally</p>
          </div>
          <div className="blog-top-right">
            <img src={trustImage} alt="" />
          </div>
        </div>
        <div className="findjob-container">
          <div className='help-first'>
            <div className='help-first-seachbar'>
              <IoSearch />
              <input type="search" name="" id="" placeholder='Search...' />
            </div>
            <div className='help-first-seachbar-btn'>
              <button>Search</button>
            </div>
          </div>
          <div className="productlist-subcategory">
            {category.map((subcategory, index) => (
              <div className="productlist-subcategory-div" key={index}>
                <p>{subcategory}</p>
              </div>
            ))}
          </div>
          <div className="findjob-jobs">
            <div className="findjob-jobs-location">
              <IoLocationSharp />
              <h6>Beaumont, TX 77707, USA</h6>
            </div>
            <div className="findjob-jobs-div">
              <Link to={'/jobs/details'} className="link">
                <div className="findjob-job">
                  <div className="findjob-job-image">
                    <img src={img} alt="" />
                  </div>
                  <div className="findjob-job-right">
                    <div className="findjob-job-right-btn">
                      <h6>Full Time</h6>
                    </div>
                    <h4>Customer Service - Self Storage Manager</h4>
                    <p>$ 16.50 - $ 16.50 / hr</p>
                    <h5>Public Storage</h5>
                    <h5>7+ days ago . Long Island City , Newyork</h5>
                  </div>
                </div>
              </Link>
              <Link to={'/jobs/details'} className="link">
                <div className="findjob-job">
                  <div className="findjob-job-image">
                    <img src={img1} alt="" />
                  </div>
                  <div className="findjob-job-right">
                    <div className="findjob-job-right-btn">
                      <h6>Full Time</h6>
                    </div>
                    <h4>Remote Personal Asistant</h4>
                    <p>$ 16.50 - $ 16.50 / hr</p>
                    <h5>Public Storage</h5>
                    <h5>7+ days ago . Long Island City , Newyork</h5>
                  </div>
                </div>
              </Link>
              <Link to={'/jobs/details'} className="link">
                <div className="findjob-job">
                  <div className="findjob-job-image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="findjob-job-right">
                    <div className="findjob-job-right-btn">
                      <h6>Full Time</h6>
                    </div>
                    <h4>Customer Service - Self Storage Manager</h4>
                    <p>$ 16.50 - $ 16.50 / hr</p>
                    <h5>Public Storage</h5>
                    <h5>7+ days ago . Long Island City , Newyork</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default FindJobs;
