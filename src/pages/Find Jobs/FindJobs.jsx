/** @format */

import "./FindJobs.css";
import trustImage from "../../assets/images/img52.jpg";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const FindJobs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const serviceCategoryId = searchParams.get("category");
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);
  const [query, setQuery] = useState("");
  const [allCategories, setAllCategories] = useState(null);

  const fetchCategories = () => {
    getApi(endPoints.getServiceCategory, {
      setResponse: setAllCategories,
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const searchHandler = () => {
    setSearch(query);
  };

  const fetchHandler = useCallback(() => {
    const queryParams = new URLSearchParams({
      limit: 1000,
      serviceCategoryId,
      search,
    });
    getApi(endPoints.getJobs(queryParams?.toString()), {
      setResponse,
    });
  }, [serviceCategoryId, search]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return (
    <>
      <div className="blog-container">
        <div className="blog-top">
          <div className="blog-top-left">
            <div className="blog-top-left-top">
              <span>HOW IT WORKS</span>
            </div>
            <h1>See Jobs Available for You</h1>
            <p>
              Freeshopps is the simplest, most trusted way to find jobs locally
            </p>
          </div>
          <div className="blog-top-right">
            <img src={trustImage} alt="" />
          </div>
        </div>
        <div className="findjob-container">
          <div className="help-first">
            <div className="help-first-seachbar">
              <IoSearch />
              <input
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Search..."
              />
            </div>
            <div className="help-first-seachbar-btn">
              <button type="button" onClick={() => searchHandler()}>
                Search
              </button>
            </div>
          </div>
          <div className="productlist-subcategory">
            {allCategories?.data?.map((item) => (
              <div
                className="productlist-subcategory-div"
                key={item?._id}
                onClick={() => navigate(`/jobs?category=${item?._id}`)}
              >
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
          <div className="findjob-jobs">
            <div className="findjob-jobs-div">
              {response?.data?.docs?.map((item) => (
                <Link
                  to={`/jobs/${item?._id}`}
                  key={item?._id}
                  className="link"
                >
                  <div className="findjob-job">
                    <div className="findjob-job-image">
                      <img src={item?.image} alt="" />
                    </div>
                    <div className="findjob-job-right">
                      <div className="findjob-job-right-btn">
                        <h6> {item?.typeOfJob} </h6>
                      </div>
                      <h4> {item?.title} </h4>
                      <p>${item?.salary}</p>
                      <h5> {item?.storage} </h5>
                      <h5>
                        {item?.createdAt?.slice(0, 10)} , {item?.location}{" "}
                      </h5>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindJobs;
