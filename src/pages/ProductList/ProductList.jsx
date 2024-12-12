import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterSidebar from "../../components/FilterDropdown/FilterDropdown";
import { products as productsData } from "../../data/products";
import './ProductList.css'
import QRcode from "../../components/CommonComponent/QRcode";
import TrackRoute from "../../components/CommonComponent/TrackRoute";




const ProductList = () => {
    const { categoryName } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchCategory = () => {
            const categoryDetails = productsData[categoryName];
            setCategory(categoryDetails || null);
        };

        fetchCategory();
    }, [categoryName]);

    if (!category) {
        return <h2>No products available for this category.</h2>;
    }
    const handleFilterApply = (filters) => {
        console.log("Applied Filters:", filters);
    };

    return (
        <>
            <div className="productlist-container">
                <div className='home-app'>
                    <QRcode />
                </div>
                <div className='home-app-filter'>
                    <TrackRoute pageName={category.categoryName} />
                </div>
                <div className="productlist-container-items">
                    <div className="productlist-left-filter">
                        <FilterSidebar
                            categories={category.categories}
                            activecategory={category.categoryName}
                            onApplyFilter={handleFilterApply}
                        />
                    </div>
                    <div className="productlist-right">
                        <div className="productlist-category">
                            <h6>{category.categoryName}</h6>
                        </div>
                        <div className="productlist-subcategory">
                            {category.subcategories.map((subcategory, index) => (
                                <div className="productlist-subcategory-div" key={index}>
                                    <p>{subcategory}</p>
                                </div>
                            ))}
                        </div>
                        <div className="productlist-products">
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
                </div>
            </div>

        </>
    );
};

export default ProductList;
