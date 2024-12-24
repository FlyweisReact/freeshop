/** @format */

import { useState, useEffect } from "react";
import "./Home.css";
import QRcode from "../../components/CommonComponent/QRcode";
import SeachByCities from "../../components/CommonComponent/SeachByCities";
import { Link, useNavigate } from "react-router-dom";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const Home = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

  const fetchProduct = () => {
    const queryParams = new URLSearchParams({
      page: 1,
      limit: 45,
    });
    getApi(endPoints.products.getAllProducts(queryParams?.toString()), {
      setResponse: setProducts,
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!products) {
    return <h2>No data found</h2>;
  }

  return (
    <>
      <div className="home-container">
        <div className="home-app">
          <QRcode />
        </div>
        <div className="home-products">
          {products?.data?.docs?.map((product) => (
            <div className="productlist-products-div" key={product.id}>
              <div className="productlist-products-image">
                <img
                  src={product?.productImages?.[0]?.image}
                  alt={product.name}
                  onClick={() =>
                    navigate(`/product/${product?.name}?id=${product?._id}`)
                  }
                />
              </div>
              <div className="productlist-products-content">
                <Link to={`/product/${product?.name}?id=${product?._id}`}>
                  <h6>{product.name}</h6>
                </Link>

                <span>${product.price}</span>
                <p>{product.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="home-products-button">
          <button>View more</button>
        </div>
        <div className="home-city">
          <SeachByCities />
        </div>
      </div>
    </>
  );
};

export default Home;
