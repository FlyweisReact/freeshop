/** @format */

import "./FindJobs.css";
import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const JobDetails = () => {
  const { id } = useParams();
  const [response, setResponse] = useState(null);
  const [similarJobs, setSimilarJobs] = useState(null);

  const fetchSimilarJobs = () => {
    const queryParams = new URLSearchParams({
      limit: 1000,
    });
    getApi(endPoints.getJobs(queryParams?.toString()), {
      setResponse: setSimilarJobs,
    });
  };

  const fetchHandler = useCallback(() => {
    getApi(endPoints.getJobDetail(id), {
      setResponse,
    });
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  useEffect(() => {
    fetchSimilarJobs();
  }, []);


  console.log(response)

  return (
    <>
      <div className="blog-container">
        <div className="press-top">
          <h1>Job Details</h1>
        </div>
        <div className="findjob-container">
          <div className="findjob-jobs-div">
            <div className="findjob-job">
              <div className="findjob-job-image">
                <img src={response?.data?.image} alt="" />
              </div>
              <div className="findjob-job-right">
                <div className="findjob-job-right-btn">
                  <h6> {response?.data?.typeOfJob} </h6>
                </div>
                <h4> {response?.data?.title} </h4>
                <p>${response?.data?.salary} </p>
                <h5> {response?.data?.storage} </h5>
                <h5>
                  {response?.data?.createdAt?.slice(0, 10)} ,{" "}
                  {response?.data?.location}
                </h5>
              </div>
            </div>
          </div>
          <div className="jobdetails-container">
            <div className="jobdetails-first">
              <div className="jobdetails-first-img"></div>
              <div className="jobdetails-first-right">
                <h6> {response?.data?.userId?.fullName} </h6>
                <p>Employer</p>
              </div>
            </div>
            <div className="jobdetails-second">
              <h6>Description</h6>
              <div className="jobdetails-second-divs">
                <p>{response?.data?.description}</p>
              </div>
            </div>
            <div className="jobdetails-first">
              <div className="jobdetails-first-img"></div>
              <div className="jobdetails-first-right">
                <h6>Report Job Post</h6>
              </div>
            </div>
            <div className="jobdetails-btn">
              <button>Apply Now</button>
            </div>
          </div>
          {similarJobs?.data?.docs?.filter((i) => i?._id !== id)?.length >
            0 && (
            <div className="findjob-jobs">
              <div className="jobdetails-jobs-head">
                <h5>Similar Posts</h5>
              </div>
              <div className="findjob-jobs-div">
                {similarJobs?.data?.docs
                  ?.filter((i) => i?._id !== id)
                  ?.map((item) => (
                    <Link
                      to={`/jobs/${item?._id}`}
                      className="link"
                      key={item?._id}
                    >
                      <div className="findjob-job">
                        <div className="findjob-job-image">
                          <img src={item?.image} alt={item?.title} />
                        </div>
                        <div className="findjob-job-right">
                          <div className="findjob-job-right-btn">
                            <h6>{item?.typeOfJob}</h6>
                          </div>
                          <h4>{item?.title}</h4>
                          <p> ${item?.salary}</p>
                          <h5>{item?.storage}</h5>
                          <h5>
                            {item?.createdAt?.slice(0, 10)} , {item?.location}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
