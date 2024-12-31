/** @format */

import "./AboutUs.css";
import img from "../../assets/images/aboutus.jpg";
import img1 from "../../assets/images/img3.jpg";
import img2 from "../../assets/images/img4.jpg";
import img3 from "../../assets/images/img20.jpg";
import img4 from "../../assets/images/img21.jpg";
import img5 from "../../assets/images/img22.jpg";
import img6 from "../../assets/images/img23.jpg";
import img7 from "../../assets/images/img24.jpg";
import img8 from "../../assets/images/img25.jpg";
import img9 from "../../assets/images/img26.jpg";
import { useEffect, useState } from "react";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const AboutUs = () => {
  const [response, setResponse] = useState(null);
  const [item, setItem] = useState(null);
  const [blogs, setBlogs] = useState(null);

  const fetchHandler = () => {
    getApi(endPoints.how_It_Works, {
      setResponse,
    });
    getApi(endPoints.aboutUs.blogs, {
      setResponse: setBlogs,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (response) {
      setItem(response?.data?.[0]);
    }
  }, [response]);

  console.log(blogs?.data);

  return (
    <>
      <div className="about-us-container">
        <div className="about-us-top">
          <img src={item?.image} alt="Family" className="background-image" />
        </div>
        <div className="about-us-second">
          <h5>{item?.title}</h5>
          <p>{item?.description}</p>
        </div>
        <div className="about-us-third">
          {item?.counts?.map((item, index) => (
            <div className="about-us-third-div" key={`counts${index}`}>
              <h6> {item?.description} </h6>
              <p> {item?.name} </p>
            </div>
          ))}
        </div>

        {blogs?.data?.length > 0 && (
          <div className="about-us-fourth">
            <h6>See what's new on Freeshopps</h6>
            <div className="about-us-fourth-main">
              {blogs?.data?.map((list, index) => (
                <div className="about-us-fourth-div" key={`freeshop${index}`}>
                  <div className="about-us-fourth-div-top">
                    <h5> {list?.category?.title} </h5>
                    <p> {list?.category?.description} </p>
                    <div className="about-us-fourth-div-top-line"></div>
                  </div>
                  <div className="about-us-fourth-div-posts">
                    {list?.freeShopNews?.map((data) => (
                      <div className="about-us-fourth-div-post" key={data?._id}>
                        <div className="about-us-fourth-div-post-img">
                          <img src={data?.image} alt="" />
                        </div>
                        <div className="about-us-fourth-div-post-content">
                          <h4>{data?.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="about-us-fivth">
          <h1> {item?.ceoLetterTitle} </h1>
          <span> {item?.ceoLetter} </span>
        </div>
        <div className="about-us-sixth-div">
          <div className="about-us-sixth-div-left">
            {item?.bottomData?.map((item, index) => (
              <div className="about-us-sixth-left-div" key={`item${index}`}>
                <h6> {item?.name} </h6>
                <p>{item?.description}</p>
                <span>Learn more →</span>
              </div>
            ))}
          </div>
          <div className="about-us-sixth-div-right">
            <img src={item?.bottomDataImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
