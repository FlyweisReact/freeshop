import { useState, useEffect } from 'react';
import { products } from '../../data/HomeData'; // Adjust the path based on your project structure

import './Home.css'
import QRcode from '../../components/CommonComponent/QRcode';

const Home = () => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        // Fetch the category data
        const fetchCategory = () => {
            setCategory(products || null);
        };

        fetchCategory();
    }, []);

    if (!category) {
        return <h2>No products available for this category.</h2>;
    }

    return (
        <>
            <div className="home-container">
                <div className='home-app'>
                    <QRcode />
                </div>
                <div className="home-products">
                    {category.products.map((product) => (
                        <div className="productlist-products-div" key={product.id}>
                            <div className="productlist-products-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="productlist-products-content">
                                <h6>{product.name}</h6>
                                <span>${product.price}</span>
                                <p>{product.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
