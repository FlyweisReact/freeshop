
import QRcode from '../../components/CommonComponent/QRcode'
import './Chat.css'

import { IoSettingsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { FaPaperclip } from "react-icons/fa6";
import { FaRegFaceSmile } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";



import img from '../../assets/images/img2.jpg'

const Chat = () => {
    return (
        <>
            <div className="home-container">
                <div className='home-app'>
                    <QRcode />
                </div>
                <div className='chat-container'>
                    <div className='chat-container-left'>
                        <div className='chat-left-top'>
                            <div className='chat-left-top-left'>
                                <p>Inbox</p>
                                <span>2 New</span>
                            </div>
                            <IoSettingsOutline />
                        </div>
                        <div className='chat-left-searchbar'>
                            <IoSearch />
                            <input type="search" placeholder='Search...' />
                        </div>
                        <div className='chat-left-main'>
                            <div className='chat-left-main-div'>
                                <div className='chat-left-main-div-top'>
                                    <div className='chat-left-main-div-image'>
                                        <div className='chat-left-main-div-img'>
                                            <img src={img} alt="" />
                                        </div>
                                        <div className='chat-left-main-div-name'>
                                            <h6>Marvin McKinney</h6>
                                            <p>Nursing Assistant</p>
                                        </div>
                                    </div>
                                    <span>5m</span>
                                </div>
                                <div className='chat-left-main-div-message'>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chat-container-middle'>
                        <div className='chat-container-middle-top'>
                            <div className='chat-middle-main-div-image'>
                                <div className='chat-middle-main-div-img'>
                                    <img src={img} alt="" />
                                </div>
                                <div className='chat-middle-main-div-name'>
                                    <h6>Marvin McKinney</h6>
                                    <p>Nursing Assistant</p>
                                </div>
                            </div>
                            <div className='chat-container-middle-right'>
                                <IoCallOutline />
                                <IoMdMore />
                            </div>
                        </div>
                        <div className='chat-main-container'>
                            <div className='chat-main-time'>
                                <p>August 21</p>
                            </div>
                            <div className='chat-main-left-message'>
                                <div className='chat-main-left-message-img'>
                                    <img src={img} alt="" />
                                </div>
                                <div className='chat-main-left-message-text'>
                                    <div className='chat-main-left-message-div'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.</p>
                                    </div>
                                    <span>10:15 pm</span>
                                </div>
                            </div>
                            <div className='chat-main-right-message'>
                                <div className='chat-main-right-message-text'>
                                    <div className='chat-main-right-message-div'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.</p>
                                    </div>
                                    <span>10:15 pm</span>
                                </div>
                                <div className='chat-main-left-message-img'>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='chat-main-input'>
                            <input type="text" name="" id="" placeholder='Write a message...' />
                            <div className='chat-main-input-icons'>
                                <FaPaperclip />
                                <FaRegFaceSmile />
                                <div className='chat-main-input-icon-send'>
                                    <LuSend />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='chat-container-right'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat