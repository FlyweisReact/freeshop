/** @format */

const endPoints = {
  auth: {
    signup: "api/v1/user/registration",
    login: "api/v1/user/login",
  },
  getCategories: "api/v1/admin/Category/allCategory",
  products: {
    getAllProducts: (query = "") => `api/v1/user/allProduct?${query}`,
    getProductDetail: (id = "") => `api/v1/user/getProduct/${id}`,
    createProduct: "api/v1/user/addProduct",
    getMyProducts: "api/v1/user/getProductsByToken",
    removeProduct: (id) => `api/v1/user/deleteProduct/${id}`,
    editPost: (id) => `api/v1/user/updateProduct/${id}`,
  },
  subCategories: {
  getSubCategoryByCatalog: (id) =>
      `api/v1/SubCategory/allSubcategoryById/${id}`,
  },
  getAllConditions: "api/v1/admin/Condition/allCondition",
  getAllBrands: "api/v1/admin/Brand/allBrand",
  getAllModels: "api/v1/admin/Model/allModel",
};

export default endPoints;
