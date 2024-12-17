import "./Trustsafety.css";
import trustImage from "../../assets/images/img28.jpg";
import smilingPerson from "../../assets/images/img29.png";
import plantsImage from "../../assets/images/img30.png";



const TrustSection = () => {
    return (
        <div className="trust-container">
            {/* Top Banner Section */}
            <div className="top-banner">
                <div className="banner-content">
                    <h1>The most valuable currency in our marketplace is trust</h1>
                    <p>
                        We're building a local marketplace where the wellbeing of buyers and
                        sellers comes first.
                    </p>
                </div>
                <img src={trustImage} alt="Trust" />
            </div>

            {/* Circular Image and Content */}
            <div className="trust-content">
                <img src={smilingPerson} alt="Smiling Person" className="circle-image" />
                <div className="trust-text">
                    <h2>A community built on trust—it’s been our mission since day one</h2>
                    <p>
                        Lorem ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard text.
                    </p>
                    <a href="#learn-more">Learn more →</a>
                </div>
            </div>

            {/* The Heart of Experience Section */}
            <div className="experience-section">
                <h2>The heart of the Freeshopps experience</h2>

                <div className="experience-grid">
                    {/* Grid Items */}
                    <div className="grid-item">
                        <h3>Create a profile</h3>
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>
                    <div className="grid-item">
                        <h3>Join Freeshopps</h3>
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>
                    <div className="grid-item">
                        <h3>Get out and go</h3>
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>
                    <div className="grid-item">
                        <h3>Find Freeshopps nearby</h3>
                        <p>
                            Lorem ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>
                </div>

                {/* Images Section */}
                <div className="experience-images">
                    <img src={plantsImage} alt="Plants" />
                </div>
            </div>
        </div>
    );
};

export default TrustSection;
