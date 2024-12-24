/** @format */
import "./ProductDetails.css";
import { FaClock } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import QRcode from "../../components/CommonComponent/QRcode";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { useCallback, useEffect, useState } from "react";

function formatDateTime(isoString) {
  const date = new Date(isoString);

  // Format options for the date
  const options = {
    month: "long", // Full month name
    day: "numeric", // Day of the month
    year: "numeric", // Full year
    hour: "numeric", // Hour (12-hour format)
    minute: "2-digit", // Minutes
    hour12: true, // 12-hour format with am/pm
  };

  // Use Intl.DateTimeFormat to format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
}

function getStars(rating, maxStars = 5) {
  // Validate input
  if (rating < 0 || rating > maxStars) {
    throw new Error(
      "Rating must be between 0 and the maximum number of stars."
    );
  }

  // Generate an array of stars
  const stars = [];
  for (let i = 0; i < maxStars; i++) {
    if (i < rating) {
      stars.push(<IoIosStar key={i} />); // Filled star
    } else {
      stars.push(<IoIosStarOutline key={i} />); // Empty star
    }
  }

  return <div>{stars}</div>;
}

const ProductDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [response, setResponse] = useState(null);

  const fetchDetail = useCallback(() => {
    getApi(endPoints.products.getProductDetail(id), {
      setResponse,
    });
  }, [id]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  return (
    <>
      <div className="home-container">
        <div className="home-app">
          <QRcode />
        </div>
        <div className="product-details-container">
          <div className="product-details-image">
            <img src={response?.data?.productImages?.[0]?.image} alt={name} />
          </div>
          <div className="product-details-content">
            <div className="product-details-content-top">
              <h2> {name} </h2>
              <p>$ {response?.data?.price}</p>
              <p>
                <FaClock />{" "}
                {response?.data?.createdAt &&
                  formatDateTime(response?.data?.createdAt)}
              </p>
              <p>
                <IoLocationSharp />
                {response?.data?.location}
              </p>
              <div className="product-details-rating">
                {getStars(response?.data?.ratings)}
              </div>
            </div>
            <div className="product-details-specification">
              <h3>Description :</h3>
              <div className="product-details-points">
                <div
                  dangerouslySetInnerHTML={{
                    __html: response?.data?.description,
                  }}
                />
              </div>
            </div>
            <div className="product-details-askbtn">
              <button onClick={() => navigate("/chat")}>Ask</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
