/** @format */

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import FilterSidebar from "../../components/FilterDropdown/FilterDropdown";
import "./ProductList.css";
import QRcode from "../../components/CommonComponent/QRcode";
import TrackRoute from "../../components/CommonComponent/TrackRoute";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const ProductList = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [response, setResponse] = useState(null);
  const [subCategories, setSubCategories] = useState(null);
  const [selectedSubcategoryId, setSelectedSubCategoryId] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState([]);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [sort, setSort] = useState(null);

  const fetchProducts = useCallback(() => {
    const queryParams = new URLSearchParams({
      page: 1,
      limit: 45,
      categoryId: id,
    });
    if (selectedSubcategoryId) {
      queryParams.append("subCategoryId", selectedSubcategoryId?.value);
    }
    if (selectedCondition?.length > 0) {
      selectedCondition.forEach((condition) => {
        queryParams.append("conditions", condition);
      });
    }
    if (fromPrice > 0) {
      queryParams.append("fromPrice", fromPrice);
    }
    if (toPrice > 0) {
      queryParams.append("toPrice", toPrice);
    }
    if (sort) {
      queryParams.append("sort", sort);
    }

    getApi(endPoints.products.getAllProducts(queryParams?.toString()), {
      setResponse,
    });
  }, [id, selectedSubcategoryId, selectedCondition, fromPrice, toPrice, sort]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const fetchSubCategories = useCallback(() => {
    getApi(endPoints.subCategories.getSubCategoryByCatalog(id), {
      setResponse: setSubCategories,
    });
  }, [id]);

  useEffect(() => {
    fetchSubCategories();
  }, [fetchSubCategories]);

  const handleSubCategory = (category) => {
    setSelectedSubCategoryId({
      value: category?._id,
      label: category?.name,
    });
  };

  return (
    <>
      <div className="productlist-container">
        <QRcode />
        <div className="home-app-filter">
          <TrackRoute pageName={categoryName} setSort={setSort} sort={sort} />
        </div>
        <div className="productlist-container-items">
          <div className="productlist-left-filter">
            <FilterSidebar
              categories={subCategories?.data || []}
              activecategory={categoryName}
              handleSubCategory={handleSubCategory}
              selectedCondition={selectedCondition}
              setSelectedCondition={setSelectedCondition}
              setFromPrice={setFromPrice}
              setToPrice={setToPrice}
            />
          </div>
          <div className="productlist-right">
            <div className="productlist-category">
              <h6>{categoryName}</h6>
            </div>
            <div className="productlist-subcategory">
              {selectedSubcategoryId && (
                <div className="productlist-subcategory-div">
                  <p> {selectedSubcategoryId?.label} </p>
                </div>
              )}
            </div>
            {(!response?.data?.docs || response.data.docs.length < 1) && (
              <h4 className="no-data-found">
                {" "}
                Sorry, we couldn't find any products for this category. Please
                try another category or refine your search.
              </h4>
            )}

            <div className="productlist-products">
              {response?.data?.docs?.map((product) => (
                <div className="productlist-products-div">
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
                      {" "}
                      <h6>{product.name}</h6>
                    </Link>

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



