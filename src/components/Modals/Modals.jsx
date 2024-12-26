/** @format */

import Modal from "react-bootstrap/Modal";
import "./Modals.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { getApi, postApi, postApiWithRedux } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../store/authSlice";
import img from "../../assets/images/logo.png";
import img1 from "../../assets/images/locations.png";
import img2 from "../../assets/images/dashboard.png";
import img3 from "../../assets/images/successgif.gif";
import img4 from "../../assets/images/jobs.png";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const LoginModalfirst = (props) => {
  return (
    <Modal
      {...props}
      size="sl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="login-container-modal">
          <div className="login-modal-top">
            <h6>Sign up / Log in</h6>
            <p onClick={props.onHide}>Cancel</p>
          </div>
          <div className="login-modal-div">
            <div className="login-modal-image">
              <img src={img} alt="" />
            </div>
            <div className="login-modal-face">
              <FaFacebook />
              <p>Continue with Facebook</p>
            </div>
            <div className="login-modal-google">
              <FcGoogle />
              <p>Continue with Google</p>
            </div>
            <div className="login-modal-apple">
              <FaApple />
              <p>Continue with Apple</p>
            </div>
            <div className="login-modal-email" onClick={props.shownext}>
              <MdEmail />
              <p>Continue with Email</p>
            </div>
            <div className="login-modal-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const LoginModalSecond = (props) => {
  return (
    <Modal
      {...props}
      size="sl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="login-container-modal">
          <div className="login-modal-top">
            <h6>Sign up / Log in</h6>
            <p onClick={props.onHide}>Cancel</p>
          </div>
          <div className="login-modal-div">
            <div className="login-modal-image">
              <img src={img} alt="" />
            </div>
            <div className="login-modal-sinup-btn" onClick={props.shownext1}>
              <p>Sign up</p>
            </div>
            <div className="login-modal-login-btn" onClick={props.shownext}>
              <p>Log in</p>
            </div>
            <div className="login-modal-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const LoginModallogin = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    email,
    password,
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(
      postApiWithRedux(endPoints.auth.login, payload, {
        setLoading,
        successMsg: "Welcome! You’ve successfully logged in.",
        errorMsg: "Login failed. Please check your credentials and try again.",
        showErr: true,
        dispatchFunc: [(res) => LOGIN(res)],
        additionalFunctions: [() => props.onHide()],
      })
    );
  };

  return (
    <Modal
      {...props}
      size="sl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <form onSubmit={loginHandler}>
          <div className="login-container-modal">
            <div className="login-modal-top">
              <h6>Log in</h6>
              <p onClick={props.onHide}>Cancel</p>
              <IoIosArrowBack onClick={props.shownext} />
            </div>
            <div className="login-modal-div">
              <div className="login-modal-image">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="login-modal-inputs">
              <div className="login-modal-input">
                <label htmlFor="">Email address</label>
                <div className="login-modal-input-in">
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="login-modal-input">
                <label htmlFor="">Password</label>
                <div className="login-modal-input-in">
                  <input
                    type="password"
                    name=""
                    id=""
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <span>Show</span>
                </div>
              </div>
              <div className="login-modal-input">
                <label htmlFor="">Forgot your password?</label>
              </div>
              <div className="login-modal-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
              <div className="login-modal-button">
                <button type="submit">
                  {loading ? <ClipLoader color="#fff" /> : "Agree & Log in"}
                </button>

                <p>Don’t have an account? Sign up</p>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const LoginModalsignup = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [passwordType, setPasswordType] = useState("password");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [pinCode, setPinCode] = useState("");
  const [allCategories, setAllCategories] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = () => {
    getApi(endPoints.getCategories, {
      setResponse: setAllCategories,
    });
  };

  const categorySelector = (item) => {
    const isAlreadyIn = selectedCategories?.some((i) => i === item);
    if (isAlreadyIn) {
      const filteredData = selectedCategories?.filter((i) => i !== item);
      setSelectedCategories(filteredData);
    } else {
      setSelectedCategories((prev) => [...prev, item]);
    }
  };

  useEffect(() => {
    if (props.show) {
      fetchCategories();
    }
  }, [props]);

  const payload = {
    fullName,
    email,
    password,
    categoryIds: selectedCategories,
    latitude,
    longitude,
    location,
    pinCode,
  };

  const submitHandler = () => {
    postApi(endPoints.auth.signup, payload, {
      setLoading,
      successMsg: "Profile created successfully !",
      showErr: true,
      additionalFunctions: [
        () => setStep(4),
        () => setTimeout(() => props.onHide(), 2000),
      ],
    });
  };

  useEffect(() => {
    if (props.show) {
      setStep(1);
    }
  }, [props]);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetch(endPoints.getLocation({ lat: latitude, long: longitude }))
            .then((response) => response.json())
            .then((data) => {
              const location = data.address?.city || data.display_name;
              setLatitude(latitude);
              setLongitude(longitude);
              setLocation(location);
              setPinCode(data?.address?.postcode);
            })
            .catch((error) => {
              console.error("Error fetching location data:", error);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve location. Please check your permissions.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <Modal
      {...props}
      size="sl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {step === 1 && (
          <div className="login-container-modal">
            <div className="login-modal-top">
              <h6>Sign up</h6>
              <p onClick={props.onHide}>Cancel</p>
              <IoIosArrowBack onClick={props.shownext} />
            </div>
            <div className="login-modal-div">
              <div className="login-modal-image">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="login-modal-inputs">
              <div className="login-modal-input">
                <label>Name</label>
                <div className="login-modal-input-in">
                  <input
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                  />
                </div>
              </div>
              <div className="login-modal-input">
                <label>Email address</label>
                <div className="login-modal-input-in">
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="login-modal-input">
                <label>Password</label>
                <div className="login-modal-input-in">
                  <input
                    type={passwordType}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  {passwordType === "text" ? (
                    <span onClick={() => setPasswordType("password")}>
                      Hide
                    </span>
                  ) : (
                    <span onClick={() => setPasswordType("text")}>Show</span>
                  )}
                </div>
              </div>
              <div className="login-modal-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
              <div className="login-modal-button">
                <button type="button" onClick={() => setStep(step + 1)}>
                  Agree & Sign up
                </button>
                <p>Don’t have an account? Log in</p>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="login-container-modal">
            <div className="locationget-modal">
              <div className="location-img">
                <img src={img1} alt="" />
              </div>
              <h3>Where are you searching?</h3>
              <div
                className="location-btn-modal"
                onClick={() => handleGetLocation()}
              >
                <IoLocationSharp />
                <p>Get my location</p>
              </div>
              <span>Or</span>
              <input
                type="text"
                placeholder="Enter Your Zip Code"
                onChange={(e) => setPinCode(e.target.value)}
                value={pinCode}
              />

              <p
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  maxWidth: "300px",
                }}
              >
                {location}
              </p>
            </div>
            <div className="login-modal-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
            </div>
            <div className="login-modal-button">
              <button
                style={{ marginTop: "10px" }}
                type="button"
                onClick={() => setStep(step + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="login-container-modal">
            <div className="locationget-modal">
              <div className="location-img">
                <img src={img2} alt="" />
              </div>
              <h3>
                Select 3 categories to <br /> personalize your feed
              </h3>
              <div className="category-container-modal">
                {allCategories?.data?.map((item, index) => (
                  <div
                    key={index}
                    className={`category-modal-div ${
                      selectedCategories.includes(item?._id) ? "selected" : ""
                    }`}
                    onClick={() => categorySelector(item?._id)}
                  >
                    <p>{item?.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="login-modal-button">
              <button
                style={{ marginTop: "10px" }}
                onClick={submitHandler}
                disabled={selectedCategories.length !== 3}
              >
                {loading ? <ClipLoader color="#fff" /> : "Next"}
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="login-container-modal">
            <div className="locationget-modal">
              <img src={img3} alt="" />
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

const DefaultModal = ({ children, open, handleClose }) => {
  return (
    <Modal show={open} onHide={handleClose} centered>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

const JObsmodal = (props) => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allCategories, setAllCategories] = useState(null);

  const fetchCategorie = () => {
    getApi(endPoints.getServiceCategory, {
      setResponse: setAllCategories,
    });
  };

  useEffect(() => {
    fetchCategorie();
  }, []);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggle = () => {
    props.onHide();
    navigate(`/jobs?category=${selectedCategories?.[0]}`);
  };

  return (
    <Modal
      {...props}
      size="sl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="login-container-modal">
          <div className="locationget-modal">
            <div className="location-img">
              <img src={img4} alt="" />
            </div>
            <h3>Find your next job</h3>
            <div className="category-container-modal">
              {allCategories?.data?.map((item) => (
                <div
                  key={item?._id}
                  className={`category-modal-div ${
                    selectedCategories.includes(item?._id) ? "selected" : ""
                  }`}
                  onClick={() => toggleCategory(item?._id)}
                >
                  <p> {item?.name} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="login-modal-button">
            <button
              style={{ marginTop: "10px" }}
              onClick={toggle}
              disabled={selectedCategories.length !== 1}
            >
              Apply
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const DeleteModal = (props) => {
  return (
    <Modal
      {...props}
      size="sl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="login-container-modal">
          <div className="delete-modal">
            <h6>
              Are You Sure Want to
              <br /> Delete Ad
            </h6>
            <div className="delete-modal-btns">
              <button onClick={props.shownext}>Yes</button>
              <button>No</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const Deletesuccessmodal = (props) => {
  return (
    <Modal
      {...props}
      size="sl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="login-container-modal">
          <div className="delete-modal-final">
            <div className="delete-modal-gif">
              <img src={img3} alt="" />
            </div>
            <p>{props.text}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export {
  LoginModalfirst,
  LoginModalSecond,
  LoginModallogin,
  LoginModalsignup,
  DefaultModal,
  JObsmodal,
};
