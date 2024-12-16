// import { useParams } from "react-router-dom";
// import productsData from "../../data/products"; 
import "./ProductDetails.css";

import img from '../../assets/images/product1.png'

import { FaClock } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import QRcode from "../../components/CommonComponent/QRcode";
import { useNavigate } from "react-router-dom";


const ProductDetails = () => {
  // const { productId } = useParams(); 
  // const product = productsData.find((item) => item.id === productId); 

  // if (!product) {
  //   return <h2>Product not found</h2>;
  // }

  const navigate = useNavigate()

  return (
    <>
      <div className="home-container">
        <div className='home-app'>
          <QRcode />
        </div>
        <div className="product-details-container">
          <div className="product-details-image">
            <img src={img} alt="kadk" />
          </div>
          <div className="product-details-content">
            <div className="product-details-content-top">
              <h2>New 2024 BMW 4 Series 430i</h2>
              <p><FaClock /> May 29, 2024 05:58 am</p>
              <p><IoLocationSharp />Beaumont, TX 77707, USA</p>
              <div className="product-details-rating">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
            <div className="product-details-specification">
              <h3>Description :</h3>
              <div className="product-details-points">
                <div className="product-details-div">
                  <div className="product-details-div-left">
                    <h6>Exterior:</h6>
                    <p>Alpine White</p>
                  </div>
                  <div className="product-details-div-left">
                    <h6>Interior:</h6>
                    <p>Black Perforated SensaTec</p>
                  </div>
                </div>
                <div className="product-details-div">
                  <div className="product-details-div-left">
                    <h6>Drivetrain:</h6>
                    <p>RWD</p>
                  </div>
                  <div className="product-details-div-left">
                    <h6>Engine:</h6>
                    <p>2.0L 4-Cylinder TwinPower Turbo</p>
                  </div>
                </div>
                <div className="product-details-div">
                  <div className="product-details-div-left">
                    <h6>Transmission:</h6>
                    <p>Automatic</p>
                  </div>
                  <div className="product-details-div-left">
                    <h6>Mileage:</h6>
                    {/* <p>Alpine White</p> */}
                  </div>
                </div>
                <div className="product-details-div">
                  <div className="product-details-div-left">
                    <h6>Fuel Efficiency:</h6>
                    <p>25 CITY / 34 HWY</p>
                  </div>
                  <div className="product-details-div-left">

                  </div>
                </div>
              </div>
            </div>
            <div className="product-details-askbtn">
              <button onClick={()=>navigate('/chat')}>Ask</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
