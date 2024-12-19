import { useNavigate } from 'react-router-dom'
import './MyListing.css'

import { FaClock } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import QRcode from "../../components/CommonComponent/QRcode";
import img from '../../assets/images/img50.jpg'
import img1 from '../../assets/images/img51.png'


const MyListing = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='mylisting-container'>
        <div className='home-app'>
          <QRcode />
        </div>
        <div>
          <div className='mylisting-div'>
            <div className="mylisting-details-container">
              <div className="mylisting-details-image">
                <h6>02/02</h6>
                <div className='mylisting-details-img'>
                  <img src={img} alt="kadk" />
                </div>
              </div>
              <div className="product-details-content">
                <div className='mylisting-details-title'>
                  <h4>Cars</h4>
                  <div className='mylisting-details-iconss'>
                    <MdDelete />
                    <MdEditSquare />
                  </div>
                </div>
                <div className="product-details-content-top">
                  <h2>New 2024 BMW 4 Series 430i</h2>
                  <p><FaClock color='#E25845' /> May 29, 2024 05:58 am</p>
                  <p><IoLocationSharp color='#E25845' />Beaumont, TX 77707, USA</p>
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
              </div>
            </div>
          </div>
          <div className='mylisting-div'>
            <div className="mylisting-details-container">
              <div className="mylisting-details-image">
                <h6>02/02</h6>
                <div className='mylisting-details-img'>
                  <img src={img1} alt="kadk" />
                </div>
              </div>
              <div className="product-details-content">
                <div className='mylisting-details-title'>
                  <h4>Cars</h4>
                  <div className='mylisting-details-iconss'>
                    <MdDelete />
                    <MdEditSquare />
                  </div>
                </div>
                <div className="product-details-content-top">
                  <h2>New 2024 BMW 4 Series 430i</h2>
                  <p><FaClock color='#E25845' /> May 29, 2024 05:58 am</p>
                  <p><IoLocationSharp color='#E25845' />Beaumont, TX 77707, USA</p>
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
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default MyListing