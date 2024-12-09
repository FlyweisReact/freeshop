// import { Link } from 'react-router-dom'
import './Header.css'

import img from '../../assets/images/logo.png'
import img1 from '../../assets/images/Vector.png'

import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa6";
import { Link } from 'react-router-dom';


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
    return (
        <>
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
                                    <IoSearch color='#FFFFFF' size={20} />
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
                            <h6>Home</h6>
                            <span>Chat</span>
                            <span>Post</span>
                            <span>My Listing</span>
                            <div className='navbarlogin'>
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