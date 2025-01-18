/** @format */
import "./MyListing.css";
import { FaClock } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import QRcode from "../../components/CommonComponent/QRcode";
import { useEffect, useState } from "react";
import { deleteApi, getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { DefaultModal } from "../../components/Modals/Modals";
import successGif from "../../assets/images/success.gif";
import { useNavigate } from "react-router-dom";

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

const MyListing = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  function fetchMyProducts() {
    getApi(endPoints.products.getMyProducts, {
      setResponse,
    });
  }

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const removeProductHandler = () => {
    deleteApi(endPoints.products.removeProduct(selectedId), {
      additionalFunctions: [
        () => setIsDelete(false),
        () => setIsSuccess(true),
        () => setTimeout(() => setIsSuccess(false), 5000),
        fetchMyProducts,
      ],
    });
  };

  return (
    <>
      <div className="mylisting-container">
        <QRcode />
        <div>
          {response?.data?.docs?.map((item, index) => (
            <div className="mylisting-div" key={item?._id}>
              <div className="mylisting-details-container">
                <div className="mylisting-details-image">
                  <h6>
                    {" "}
                    {index + 1} / {response?.data?.totalDocs}
                  </h6>
                  <div className="mylisting-details-img">
                    <img
                      src={item?.productImages?.[0]?.image}
                      alt={item?.name}
                    />
                  </div>
                </div>
                <div className="product-details-content">
                  <div className="mylisting-details-title">
                    <h4> {item?.categoryId?.name} </h4>
                    <div className="mylisting-details-iconss">
                      <MdDelete
                        onClick={() => {
                          setSelectedId(item?._id);
                          setIsDelete(true);
                        }}
                      />
                      <MdEditSquare
                        onClick={() => navigate(`/edit-post/${item?._id}`)}
                      />
                    </div>
                  </div>
                  <div className="product-details-content-top">
                    <h2> {item?.name} </h2>
                    <p>$ {item?.price}</p>
                    <p>
                      <FaClock color="#E25845" />{" "}
                      {item?.createdAt && formatDateTime(item?.createdAt)}
                    </p>
                    {item?.location && (
                      <p>
                        <IoLocationSharp color="#E25845" />
                        {item?.location}
                      </p>
                    )}
                  </div>
                  <div className="product-details-specification">
                    <h3>Description :</h3>
                    <div className="product-details-points">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DefaultModal open={isDelete} handleClose={() => setIsDelete(false)}>
          <div className="delete-product-modal">
            <h6>
              Are You Sure Want to <br /> Delete Ad
            </h6>
            <div className="btn-container">
              <button
                className="remove-btn"
                type="button"
                onClick={() => removeProductHandler()}
              >
                Yes
              </button>
              <button
                className="outline-btn"
                type="button"
                onClick={() => setIsDelete(false)}
              >
                No
              </button>
            </div>
          </div>
        </DefaultModal>

        <DefaultModal open={isSuccess} handleClose={() => setIsSuccess(false)}>
          <div className="success-delete-product-modal">
            <img src={successGif} alt="" className="gif" />
            <h6>You are Successfully Log out</h6>
          </div>
        </DefaultModal>
      </div>
    </>
  );
};

export default MyListing;
