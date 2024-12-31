/** @format */

const endPoints = {
  auth: {
    signup: "api/v1/user/registration",
    login: "api/v1/user/login",
    getProfile: "api/v1/user/getProfile",
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
  getLocation: ({ lat, long }) =>
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`,
  blogs: {
    getAll: (query = "") => `api/v1/admin/allBlog?${query}`,
  },
  getHelpCenter: "api/v1/admin/HelpCenter/allCategory",
  getArticle: (query = "") => `api/v1/admin/Article/getArticle?${query}`,
  getJobs: (query = "") => `api/v1/user/allJobs?${query}`,
  getServiceCategory: "api/v1/admin/ServiceCategory/allServiceCategory",
  getJobDetail: (id) => `api/v1/user/getJobs/${id}`,
  career: {
    getBanner: "api/v1/admin/Career/allCareer",
    getOpenings: "api/v1/admin/allCareerOpeningForWebsite",
  },
  trust_safety: "api/v1/admin/TrustAndSafety/allTrustAndSafety",
  how_It_Works: "api/v1/admin/HowItsWork/allHowItsWork",
  aboutUs: {
    blogs: "api/v1/admin/allFreeShopNewsForWebsite",
  },
  press: {
    contactDetails: "api/v1/admin/Press/allPress",
    pressTopic: "api/v1/admin/allPressTopic",
    news: "api/v1/admin/allPressNewsForWebsite",
    offerupNews : "api/v1/admin/allPressOfferUpNews"
  },
};

export default endPoints;
