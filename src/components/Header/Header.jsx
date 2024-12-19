// import { Link } from 'react-router-dom'
import './Header.css'

import img from '../../assets/images/logo.png'
import img1 from '../../assets/images/Vector.png'

import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { LoginModalfirst, LoginModallogin, LoginModalSecond, LoginModalsignup } from '../Modals/Modals';
import { useState } from 'react';


const Header = () => {
    const categories = [
        "Electronics & Media",
        "Home & Garden",
        "Clothing & Accessories",
        "Baby & Kids",
        "Vehicles",
        "Toys, Games, & Hobbies",
        "Sports & Outdoors",
        "Collectibles & Art",
        "More",
    ];
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const toggle =()=>{
        setShow(false)
        setShow1(true)
    }
    const toggle1 =()=>{
        setShow1(false)
        setShow2(true)
    }
    const toggle2 =()=>{
        setShow1(true)
        setShow2(false)
        setShow3(false)
    }
    const toggle3 =()=>{
        setShow1(false)
        setShow3(true)
    }

    return (
        <>
            <LoginModalfirst
                show={show}
                onHide={() => setShow(false)}
                shownext={toggle}
            />
            <LoginModalSecond
                show={show1}
                onHide={() => setShow1(false)}
                shownext={toggle1}
                shownext1={toggle3}
            />
            <LoginModallogin
                show={show2}
                onHide={() => setShow2(false)}
                shownext={toggle2}
            />
            <LoginModalsignup
                show={show3}
                onHide={() => setShow3(false)}
                shownext={toggle2}
            />
            <header className="navbar-container">
                <div className='navbar-top-div'>
                    <div className='navbar-left'>
                        <div className='navbar-logo'>
                            <img src={img} alt="" />
                        </div>
                        <div className='navbar-searchbar-container'>
                            <div className='navbar-searchbar-div'>
                                <input type="text" placeholder='Search for sale' />
                                <select name="" id="">
                                    <option value="">For Sale</option>
                                    <option value="">For Sale</option>
                                    <option value="">For Sale</option>
                                </select>
                                <div className='navbar-searchbar-icon'>
                                    <IoSearch color='#FFFFFF' size={28} />
                                </div>
                            </div>
                            <div className='navbar-location'>
                                <h6>
                                    <IoLocationSharp />
                                    Nearby + Shipping
                                    <FaTruck />
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-right'>
                        <div className='navbar-getapp'>
                            <button>Get the app</button>
                        </div>
                        <div className='navbar-right-items'>
                            <h6 onClick={() => navigate('/')}>Home</h6>
                            <span onClick={() => navigate('/chat')}>Chat</span>
                            <span onClick={() => navigate('/post')}>Post</span>
                            <span onClick={() => navigate('/mylisting')}>My Listing</span>
                            <div className='navbarlogin' onClick={()=>setShow(true)}>
                                <p>Log in</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navbar-bottom-div'>
                    <div className='navbar-bottom-job'>
                        <h6>Find a Job</h6>
                        <img src={img1} alt="" />
                    </div>
                    <nav className='navbar-bottom-items'>
                        <ul>
                            {categories.map((category) => (
                                <li key={category}>
                                    <Link to={`/category/${category.toLowerCase().replace(/ & /g, "-")}`}>
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header