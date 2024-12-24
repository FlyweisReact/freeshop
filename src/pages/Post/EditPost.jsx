/** @format */

import "./Post.css";
import { GoTag } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiImage } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { MdOutlineLink } from "react-icons/md";
import QRcode from "../../components/CommonComponent/QRcode";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [subCategoryId, setSubCategoryId] = useState("");
  const [conditions, setConditions] = useState("");
  const [video, setVideo] = useState(null);
  const [brandId, setBrandId] = useState("");
  const [modelId, setModelId] = useState("");
  const [type, setType] = useState("");
  const [isFree, setIsFree] = useState(false);
  //   const [latitude, setLatitude] = useState(null);
  //   const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allCategories, setAllCategories] = useState(null);
  const [allSubCategories, setAllSubCategories] = useState(null);
  const [allConditions, setAllConditions] = useState(null);
  const [allBrands, setAllBrands] = useState(null);
  const [allModels, setAllModels] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  const fetchProductDetails = useCallback(() => {
    getApi(endPoints.products.getProductDetail(id), {
      setResponse: setProductDetails,
    });
  }, [id]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  useEffect(() => {
    if (productDetails) {
      const item = productDetails?.data;
      setCategoryId(item?.categoryId);
      setName(item?.name);
      setDescription(item?.description);
      setPrice(item?.price);
      setLocation(item?.location);
      setSubCategoryId(item?.subCategoryId);
      setConditions(item?.conditions);
      setBrandId(item?.brandId);
      setModelId(item?.modelId);
      setType(item?.type);
      setIsFree(item?.isFree);
    }
  }, [productDetails]);

  function fetchModels() {
    getApi(endPoints.getAllModels, {
      setResponse: setAllModels,
    });
  }

  function fetchBrands() {
    getApi(endPoints.getAllBrands, {
      setResponse: setAllBrands,
    });
  }

  const fetchCategories = () => {
    getApi(endPoints.getCategories, {
      setResponse: setAllCategories,
    });
  };

  const fetchSubCategories = useCallback(() => {
    if (categoryId) {
      getApi(endPoints.subCategories.getSubCategoryByCatalog(categoryId), {
        setResponse: setAllSubCategories,
      });
    }
  }, [categoryId]);

  const fetchConditions = () => {
    getApi(endPoints.getAllConditions, {
      setResponse: setAllConditions,
    });
  };

  useEffect(() => {
    fetchCategories();
    fetchConditions();
    fetchBrands();
    fetchModels();
  }, []);

  useEffect(() => {
    fetchSubCategories();
  }, [fetchSubCategories]);

  const fd = new FormData();
  fd.append("name", name);
  fd.append("categoryId", categoryId);
  fd.append("description", description);
  fd.append("price", price);
  fd.append("location", location);
  fd.append("image", image);
  fd.append("subCategoryId", subCategoryId);
  fd.append("conditions", conditions);
  fd.append("video", video);
  fd.append("brandId", brandId);
  fd.append("modelId", modelId);
  fd.append("type", type);
  fd.append("isFree", isFree);

  const createPost = (e) => {
    e.preventDefault();
    putApi(endPoints.products.editPost(id), fd, {
      setLoading,
      successMsg: "Successfully Edited",
      showErr: true,
      additionalFunctions: [() => navigate("/post/thank-you")],
    });
  };

  return (
    <div className="post-form-container">
      <div className="home-app">
        <QRcode />
      </div>
      <form onSubmit={createPost}>
        <div className="post-form-main">
          <div className="post-form-main-div">
            <div className="post-form-heading">
              <GoTag />
              <h6>Category (Required)</h6>
            </div>
            <div className="post-form-inputes">
              <select
                onChange={(e) => setCategoryId(e.target.value)}
                value={categoryId}
                required
              >
                <option value="">Select Option</option>
                {allCategories?.data?.map((item) => (
                  <option value={item?._id} key={item?._id}>
                    {" "}
                    {item?.name}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {categoryId && (
            <div className="post-form-main-div">
              <div className="post-form-heading">
                <h6>Sub-Category (Optional)</h6>
              </div>
              <div className="post-form-inputes">
                <select
                  onChange={(e) => setSubCategoryId(e.target.value)}
                  value={subCategoryId}
                >
                  <option value="">Select Option</option>
                  {allSubCategories?.data?.map((item) => (
                    <option value={item?._id} key={item?._id}>
                      {" "}
                      {item?.name}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="post-form-main-div">
            <div className="post-form-heading">
              <IoIosInformationCircleOutline />
              <h6> Product Information :</h6>
            </div>
            <div className="post-form-inputes">
              <label>Title</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="post-form-inputes">
              <label>Price</label>
              <input
                type="number"
                min={0}
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
            <div
              className="post-form-inputes"
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>Free</label>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                onChange={(e) => setIsFree(e.target.checked)}
                checked={isFree}
              />
            </div>

            <div className="post-form-inputes">
              <label htmlFor="">Description</label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
              />
            </div>

            <div className="post-form-inputes">
              <label>Condition (Required) </label>
              <select
                onChange={(e) => setConditions(e.target.value)}
                value={conditions}
                required
              >
                <option value="">Ex : Used</option>
                {allConditions?.data?.map((item) => (
                  <option value={item?._id} key={item?._id}>
                    {" "}
                    {item?.name}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="post-form-inputes">
              <label>Brand (Optional)</label>
              <select
                onChange={(e) => setBrandId(e.target.value)}
                value={brandId}
              >
                <option value="">Ex : Sony , Panasonic</option>
                {allBrands?.data?.map((item) => (
                  <option value={item?._id} key={item?._id}>
                    {" "}
                    {item?.name}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="post-form-inputes">
              <label>Model (Optional)</label>
              <select
                onChange={(e) => setModelId(e.target.value)}
                value={modelId}
              >
                <option value="">Ex : 2023 , 2024</option>
                {allModels?.data?.map((item) => (
                  <option value={item?._id} key={item?._id}>
                    {" "}
                    {item?.name}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="post-form-inputes">
              <label>Type (Optional) </label>
              <input
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={type}
                placeholder="Ex : New 2023 (2.3.2)"
              />
            </div>
          </div>

          <div className="post-form-main-div">
            <div className="post-form-heading">
              <FiImage />
              <h6> Images :</h6>
            </div>
            <div className="post-form-image-div">
              <p>
                Recommended image size to (870x493px)
                <br />
                Image maximum size 3 MB
                <br />
                Allowed image type (png, jpg, jpeg)
                <br />
                You can upload up to 5 images
              </p>
              <div className="post-form-images">
                <div className="post-form-image-left">
                  <h1>
                    {image?.name ? image?.name : "Choose files to upload"}{" "}
                  </h1>
                </div>
                <div className="post-form-image-right">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("image-file").click()
                    }
                  >
                    Choose Files
                  </button>
                </div>
              </div>
              <input
                type="file"
                id="image-file"
                onChange={(e) => setImage(e.target.files[0])}
                className="d-none"
              />
              <span>© innostudio.de • Fileuploader</span>
            </div>
          </div>
          <div className="post-form-main-div">
            <div className="post-form-heading">
              <MdOutlineLink />
              <h6>Video URL :</h6>
            </div>
            <div className="post-form-inputes">
              <input
                type="text"
                placeholder="Only YouTube & Video URL"
                onChange={(e) => setVideo(e.target.value)}
                value={video}
              />
            </div>
          </div>
          <div className="post-form-main-div">
            <div className="post-form-heading">
              <FiUser />
              <h6>Contact Details :</h6>
            </div>
            <div className="post-form-inputes">
              <label htmlFor="">Location</label>
              <input
                type="text"
                placeholder="Select Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            {/* <div className="post-form-location-map">
              <img src={img} alt="" />
            </div> */}
          </div>
          <div className="post-form-inputes-check">
            <div className="post-form-check">
              <input type="checkbox" />
              <h5>Don't show map</h5>
            </div>
            <div className="post-form-check">
              <input type="checkbox" required />
              <h5>
                I have read and agree to the website{" "}
                <span>Terms & Conditions</span>.
              </h5>
            </div>
            <button className="post-form-inputes-check-btn" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Post"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
