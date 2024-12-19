import './Help.css'
import { IoSearch } from "react-icons/io5";

import img from '../../assets/images/img47.png'
import img1 from '../../assets/images/img48.png'
import img2 from '../../assets/images/img49.png'

const Help = () => {
  return (
    <>
      <div className='help-container'>
        <div className='help-first'>
          <div className='help-first-seachbar'>
            <IoSearch />
            <input type="search" name="" id="" placeholder='Search...' />
          </div>
          <div className='help-first-seachbar-btn'>
            <button>Search</button>
          </div>
        </div>
        <div className='help-second'>
          <div className='help-second-div'>
            <div className='help-second-div-img'>
              <img src={img} alt="" />
            </div>
            <div className='help-second-div-content'>
              <h6>Getting Started</h6>
              <p>Learn how to buy and sell</p>
            </div>
          </div>
          <div className='help-second-div'>
            <div className='help-second-div-img'>
              <img src={img1} alt="" />
            </div>
            <div className='help-second-div-content'>
              <h6>Rules & Policies</h6>
              <p>Learn about community guidelines</p>
            </div>
          </div>
          <div className='help-second-div'>
            <div className='help-second-div-img'>
              <img src={img2} alt="" />
            </div>
            <div className='help-second-div-content'>
              <h6>Community Safety</h6>
              <p>Learn how to stay safe</p>
            </div>
          </div>
        </div>
        <div className='help-third'>
          <h5>Popular articles</h5>
          <div className='help-third-divs'>
            <div className='help-third-div'>
              <h6>2-Day Purchase Protection Policy</h6>
              <p>As a buyer, you have the ability to file a clai...</p>
            </div>
            <div className='help-third-div'>
              <h6>Selling faster with promotions</h6>
              <p>Promote your items near the top of the feed and...</p>
            </div>
            <div className='help-third-div'>
              <h6>Tips for messaging</h6>
              <p>When you want to communicate with a buyer or se...</p>
            </div>
          </div>
        </div>
        <div className='help-third'>
          <h5>Knowledge base</h5>
          <div className='help-fouth-divs'>
            <div className='help-fouth-div'>
              <h6>Getting Started</h6>
            </div>
            <div className='help-fouth-div'>
              <h6>Rules & Policies</h6>
            </div>
            <div className='help-fouth-div'>
              <h6>Community Safety</h6>
            </div>
            <div className='help-fouth-div'>
              <h6>For Buyers</h6>
            </div>
            <div className='help-fouth-div'>
              <h6>For Sellers</h6>
            </div>
            <div className='help-fouth-div'>
              <h6>Your Account</h6>
            </div>
            <div className='help-fouth-div'>
              <h6>Services & Features</h6>
            </div>
            <div className='help-fouth-div'>
              <h6>Legal Resources</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help