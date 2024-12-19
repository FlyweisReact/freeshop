import "./FindJobs.css";



import img from '../../assets/images/img54.jpg'
import img1 from '../../assets/images/img55.jpg'
import img2 from '../../assets/images/img57.jpg'
import { Link } from "react-router-dom";



const JobDetails = () => {

  return (
    <>
      <div className="blog-container">
        <div className='press-top'>
          <h1>Job Details</h1>
        </div>
        <div className="findjob-container">
          <div className="findjob-jobs-div">
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
          </div>
          <div className="jobdetails-container">
            <div className="jobdetails-first">
              <div className="jobdetails-first-img">
              </div>
              <div className="jobdetails-first-right">
                <h6>Zynnat Private Limited</h6>
                <p>Employer</p>
              </div>
            </div>
            <div className="jobdetails-second">
              <h6>Description</h6>
              <div className="jobdetails-second-divs">
                <p>Lorem ipsum dolor sit amet consectetur. Nullam interdum ipsum aliquam tortor. Enim donec nunc faucibus condimentum tortor senectus in ullamcorper sit. </p>
                <p>Lorem ipsum dolor sit amet consectetur. Nullam interdum ipsum aliquam tortor. Enim donec nunc faucibus condimentum tortor senectus in ullamcorper sit. </p>
                <p>Lorem ipsum dolor sit amet consectetur. Nullam interdum ipsum aliquam tortor. Enim donec nunc faucibus condimentum tortor senectus in ullamcorper sit. </p>
              </div>
            </div>
            <div className="jobdetails-first">
              <div className="jobdetails-first-img">
              </div>
              <div className="jobdetails-first-right">
                <h6>Report Job Post</h6>
              </div>
            </div>
            <div className="jobdetails-btn">
              <button>Apply Now</button>
            </div>
          </div>
          <div className="findjob-jobs">
            <div className="jobdetails-jobs-head">
              <h5>Similar Posts</h5>
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

export default JobDetails;
