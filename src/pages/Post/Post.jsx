import './Post.css'
import { GoTag } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiImage } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { MdOutlineLink } from "react-icons/md";


import img from '../../assets/images/Background.png'
import QRcode from '../../components/CommonComponent/QRcode';
import { useNavigate } from 'react-router-dom';


const Post = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="post-form-container">
                <div className='home-app'>
                    <QRcode />
                </div>
                <div className='post-form-main'>
                    <div className='post-form-main-div'>
                        <div className='post-form-heading'>
                            <GoTag />
                            <h6>Category :</h6>
                        </div>
                        <div className='post-form-inputes'>
                            <select name="" id="">
                                <option value="">Select Option</option>
                            </select>
                        </div>
                    </div>
                    <div className='post-form-main-div'>
                        <div className='post-form-heading'>
                            <IoIosInformationCircleOutline />
                            <h6> Product Information :</h6>
                        </div>
                        <div className='post-form-inputes'>
                            <label htmlFor="">Title</label>
                            <input type="text" placeholder='Title' />
                        </div>
                        <div className='post-form-inputes'>
                            <label htmlFor="">Description</label>
                            <input type="text" placeholder='Title' />
                        </div>
                    </div>
                    <div className='post-form-main-div'>
                        <div className='post-form-heading'>
                            <FiImage />
                            <h6> Images :</h6>
                        </div>
                        <div className='post-form-image-div'>
                            <p>Recommended image size to (870x493px)<br />
                                Image maximum size 3 MB<br />
                                Allowed image type (png, jpg, jpeg)<br />
                                You can upload up to 5 images</p>
                            <div className='post-form-images'>
                                <div className='post-form-image-left'>
                                    <h1>Choose files to upload</h1>
                                </div>
                                <div className='post-form-image-right'>
                                    <button>Choose Files</button>
                                </div>
                            </div>
                            <span>© innostudio.de • Fileuploader</span>
                        </div>
                    </div>
                    <div className='post-form-main-div'>
                        <div className='post-form-heading'>
                            <MdOutlineLink />
                            <h6>Video URL :</h6>
                        </div>
                        <div className='post-form-inputes'>
                            <input type="text" placeholder='Only YouTube & Vimeo URL' />
                        </div>
                    </div>
                    <div className='post-form-main-div'>
                        <div className='post-form-heading'>
                            <FiUser />
                            <h6>Contact Details :</h6>
                        </div>
                        <div className='post-form-inputes'>
                            <label htmlFor="">Phone</label>
                            <input type="text" placeholder='Phone no' />
                        </div>
                        <div className='post-form-inputes'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='post-form-inputes'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className='post-form-inputes'>
                            <label htmlFor="">Location</label>
                            <input type="text" placeholder='Select Location' />
                        </div>
                        <div className='post-form-location-map'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='post-form-inputes-check'>
                        <div className='post-form-check'>
                            <input type="checkbox" />
                            <h5>Don't show map</h5>
                        </div>
                        <div className='post-form-check'>
                            <input type="checkbox" />
                            <h5>I have read and agree to the website <span>Terms & Conditions</span>.</h5>
                        </div>
                        <button className='post-form-inputes-check-btn' onClick={() => navigate('/post/thank-you')}>Submit Ad</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post