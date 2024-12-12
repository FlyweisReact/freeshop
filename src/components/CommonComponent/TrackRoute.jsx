
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";


const TrackRoute = ({pageName}) => {
    return (
        <>
            <div className="trackroute-container">
                <div className="trackroute-left">
                    <Link to={'/'} className="link">
                        <span>Home</span>
                    </Link>
                    <IoIosArrowForward />
                    <h6>{pageName}</h6>
                </div>
                <div className="trackroute-right">
                    <p>Sort by: Recent first (Default)</p>
                    <IoIosArrowDown />
                </div>
            </div>
        </>
    )
}

export default TrackRoute