import "./Trustsafety.css";
import trustImage from "../../assets/images/img28.jpg";
import smilingPerson from "../../assets/images/img29.png";
import plantsImage from "../../assets/images/img30.png";



const TrustSection = () => {
    return (
        <>
            <div className="trust-container">
                <div className="trust-top">
                    <div className="trust-top-left">
                        <h1>The most valuable
                            currency in our
                            marketplace is trust</h1>
                        <p>We’re building a local marketplace where the
                            wellbeing of buyers and sellers comes first</p>
                    </div>
                    <div className="trust-top-right">
                        <img src={trustImage} alt="" />
                    </div>
                </div>
                <div className="trust-middle">
                    <div className="trust-middle-left">
                        <img src={smilingPerson} alt="" />
                    </div>
                    <div className="trust-middle-right">
                        <h4>A community built on trust—it’s
                            been our mission since day one</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                        <span>Learn more →</span>
                    </div>
                </div>
                <div className='about-us-sixth-div'>
                    <div className='about-us-sixth-div-left'>
                        <div className="trust-middle-bottom-heading">
                            <h5>The heart of the Freeshopps
                                experience</h5>
                        </div>
                        <div className='about-us-sixth-left-div'>
                            <h6>Create a profile</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            <span>Read more→</span>
                        </div>
                        <div className='about-us-sixth-left-div'>
                            <h6>Join TruYou</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            <span>Read more→</span>
                        </div>
                        <div className='about-us-sixth-left-div'>
                            <h6>Get and give ratings</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            <span>Read more→</span>
                        </div>
                        <div className='about-us-sixth-left-div'>
                            <h6>Find MeetUp Spots nearby</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            <span>Read more→</span>
                        </div>
                    </div>
                    <div className='about-us-sixth-div-right'>
                        <img src={plantsImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrustSection;
