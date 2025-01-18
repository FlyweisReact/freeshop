/** @format */

import { useState, useEffect, useCallback } from "react";
import QRcode from "../../components/CommonComponent/QRcode";
import SeachByCities from "../../components/CommonComponent/SeachByCities";
import { Link, useNavigate } from "react-router-dom";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import styles from "../../css/home.module.css";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [limit, setLimit] = useState(45);
  const navigate = useNavigate();

  const fetchProduct = useCallback(() => {
    const queryParams = new URLSearchParams({
      page: 1,
      limit,
    });
    getApi(endPoints.products.getAllProducts(queryParams?.toString()), {
      setResponse: setProducts,
    });
  }, [limit]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (!products) {
    return <h2>No data found</h2>;
  }

  return (
    <>
      <div>
        <QRcode />

        <div className={styles.product_container}>
          {products?.data?.docs?.map((product) => (
            <div className={styles.product} key={product.id}>
              <div className={styles.thumbnail}>
                <img
                  src={product?.productImages?.[0]?.image}
                  alt={product.name}
                  onClick={() =>
                    navigate(`/product/${product?.name}?id=${product?._id}`)
                  }  
                />     
              </div>
              <div className={styles.product_info}>
                <Link to={`/product/${product?.name}?id=${product?._id}`}>
                  <h6 className={styles.product_name}>{product.name}</h6>
                </Link>
                <span className={styles.product_price}>${product.price}</span>
                <p className={styles.location}>{product.location}</p>
              </div>
            </div>
          ))}
        </div>

        {products?.data?.hasNextPage && (
          <div className={styles.view_more_btn_container}>
            <button type="button" onClick={() => setLimit(limit + 10)}>
              View more
            </button>
          </div>
        )}

        <SeachByCities />
      </div>
    </>
  );
};

export default Home;
