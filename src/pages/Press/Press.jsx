import './Press.css'
import { FaArrowRightLong } from "react-icons/fa6";


import img from '../../assets/images/img44.jpg'
import img1 from '../../assets/images/img45.jpg'
import img2 from '../../assets/images/img46.png'

const Press = () => {
  return (
    <>
      <div className='press-container'>
        <div className='press-top'>
          <h1>The latest Freeshopps news</h1>
        </div>
        <div className='press-second'>
          <div className='press-second-left'>
            <img src={img} alt="" />
          </div>
          <div className='press-second-right'>
            <p>Featured News / April 5, 2024</p>
            <h5>Resale Is the New Status Symbol</h5>
            <span>The secondhand stigma is a fast-fading memory as more and more buyers and
              sellers flock to resale platforms to give new life to pre-worn, pre-loved items. Will
              fast fashion give way to conscientious consumerism? Check out this article on the
              trends.</span>
            <h6>Read now</h6>
          </div>
        </div>
        <div className='press-third'>
          <div className='press-third-left'>
            <h4>Press Highlights</h4>
          </div>
          <div className='press-third-right'>
            <div className='press-third-right-div'>
              <h6>Resale Is the New Status Symbol</h6>
              <p>April 5, 2024</p>
            </div>
            <div className='press-third-right-div'>
              <h6>How to plan a sustainable wedding for 2024, according to experts</h6>
              <p>May 31, 2024</p>
            </div>
            <div className='press-third-right-div'>
              <h6>‘Thrifting’ Extends to Holiday Shopping Too</h6>
              <p>December 19, 2023</p>
            </div>
            <div className='press-third-right-div'>
              <h6>Gift guides & livestreaming: How resale platforms are wooing shoppers this holiday season</h6>
              <p>December 8, 2023</p>
            </div>
            <div className='press-third-right-div'>
              <h6>Secondhand is quickly becoming the new way to shop and save</h6>
              <p>October 27, 2023</p>
            </div>
            <div className='press-third-right-div'>
              <h6>Back-to-school checklist: Tutoring, tech, routines, safety, more</h6>
              <p>August 30, 2023</p>
            </div>
            <div className='press-third-right-div'>
              <h6>Trouble Paying Bills? 69% Say They’ve Used This Surprising Method To Earn Extra Cash for Everyday Expenses</h6>
              <p>August 30, 2023</p>
            </div>
            <div className='press-third-right-div'>
              <h6>Many Casual Resellers Do So to ‘Make Ends Meet,’ Taxpayers Could Face New Challenges</h6>
              <p>August 29, 2023</p>
            </div>
          </div>
        </div>
        <div className='press-third'>
          <div className='press-third-left'>
            <h4>Press Releases</h4>
          </div>
          <div className='press-third-right'>
            <div className='press-third-right-div'>
              <h6>2023 Holiday Report</h6>
              <p>November 30, 2023</p>
            </div>
            <div className='press-third-right-div'>
              <h6>2023 Freeshopps Recommerce Report</h6>
              <p>August 29, 2023</p>
            </div>
            <div className='press-third-right-div'>
              <h6>2022 Holiday Report</h6>
              <p>November 9, 2022</p>
            </div>
            <div className='press-third-right-div'>
              <h6>2022 Freeshopps Recommerce Report</h6>
              <p>August 30, 2022</p>
            </div>
          </div>
        </div>
        <div className='press-fourth'>
          <h6>OfferUp News and Announcements</h6>
          <div className='press-fourth-divs'>
            <div className='press-fourth-div'>
              <div className='press-fourth-div-img'>
                <img src={img1} alt="" />
              </div>
              <div className='press-fourth-div-content'>
                <h5>A Letter From Our CEO: A Profitable Year and
                  Our Path Forward</h5>
                <span>Read Now</span>
              </div>
            </div>
            <div className='press-fourth-div'>
              <div className='press-fourth-div-img'>
                <img src={img1} alt="" />
              </div>
              <div className='press-fourth-div-content'>
                <h5>A Letter From Our CEO: A Profitable Year and
                  Our Path Forward</h5>
                <span>Read Now</span>
              </div>
            </div>
            <div className='press-fourth-div'>
              <div className='press-fourth-div-img'>
                <img src={img1} alt="" />
              </div>
              <div className='press-fourth-div-content'>
                <h5>A Letter From Our CEO: A Profitable Year and
                  Our Path Forward</h5>
                <span>Read Now</span>
              </div>
            </div>
            <div className='press-fourth-div'>
              <div className='press-fourth-div-img'>
                <img src={img1} alt="" />
              </div>
              <div className='press-fourth-div-content'>
                <h5>A Letter From Our CEO: A Profitable Year and
                  Our Path Forward</h5>
                <span>Read Now</span>
              </div>
            </div>
          </div>
        </div>
        <div className='press-fivth'>
          <div className='press-fivth-div'>
            <h6>Freeshopps Fact Sheet</h6>
            <FaArrowRightLong />
          </div>
          <div className='press-fivth-div'>
            <h6>Freeshopps Press Kit</h6>
            <FaArrowRightLong />
          </div>
          <div className='press-fivth-div'>
            <h6>2023 Recommerce Report</h6>
            <FaArrowRightLong />
          </div>
          <div className='press-fivth-div'>
            <h6>Freeshopps Leadership</h6>
            <FaArrowRightLong />
          </div>
        </div>
        <div className='press-sixeth'>
          <div className='press-sixeth-left'>
            <img src={img2} alt="" />
          </div>
          <div className='press-sixeth-right'>
            <h6>Media Contact</h6>
            <h5>Questions? Please get in touch.</h5>
            <span>Contact Freeshopps media relations → </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Press