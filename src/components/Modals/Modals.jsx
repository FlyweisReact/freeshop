
import Modal from "react-bootstrap/Modal";
import './Modals.css'

import img from '../../assets/images/logo.png'

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";


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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const LoginModallogin = (props) => {

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
                        <h6>Log in</h6>
                        <p onClick={props.onHide}>Cancel</p>
                        <IoIosArrowBack onClick={props.shownext}/>
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
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="login-modal-input">
                            <label htmlFor="">Password</label>
                            <div className="login-modal-input-in">
                                <input type="password" name="" id="" />
                                <span>Show</span>
                            </div>
                        </div>
                        <div className="login-modal-input">
                            <label htmlFor="">Forgot your password?</label>
                        </div>
                        <div className="login-modal-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </div>
                        <div className="login-modal-button">
                            <button>Agree & Log in</button>
                            <p>Don’t have an account? Sign up</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const LoginModalsignup = (props) => {

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
                        <h6>Sign up</h6>
                        <p onClick={props.onHide}>Cancel</p>
                        <IoIosArrowBack onClick={props.shownext}/>
                    </div>
                    <div className="login-modal-div">
                        <div className="login-modal-image">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="login-modal-inputs">
                        <div className="login-modal-input">
                            <label htmlFor="">Name</label>
                            <div className="login-modal-input-in">
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="login-modal-input">
                            <label htmlFor="">Email address</label>
                            <div className="login-modal-input-in">
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="login-modal-input">
                            <label htmlFor="">Password</label>
                            <div className="login-modal-input-in">
                                <input type="password" name="" id="" />
                                <span>Show</span>
                            </div>
                        </div>
                        <div className="login-modal-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </div>
                        <div className="login-modal-button">
                            <button>Agree & Sign up</button>
                            <p>Don’t have an account? Log in</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}





export {
    LoginModalfirst,
    LoginModalSecond,
    LoginModallogin,
    LoginModalsignup
}