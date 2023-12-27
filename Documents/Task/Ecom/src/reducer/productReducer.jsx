import { productDetails } from "../ProductData";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADD_PRODUCT_DATA":
      return {
        ...state,
        subCatDetails: action.payload,
      };

    case "SET_ALL_CATEGORY":
      return {
        ...state,
        allCategory: action.payload,
      };

    case "ADD_PRODUCTS":
      const { name, value, image } = action.payload;
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          [name]: value,
          image,
        },
      };

    case "SAVE_CATEGORIES":
      const { selectCategory, selectSubCategory, id, extraFields } =
        action.payload;

      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          categoryName: selectCategory.name,
          subCategoryName: selectSubCategory.subcategoryName,
          categoryId: id,
        },
        fields: extraFields,
      };

    // case "LIST_PRODUCTS":
    //   return {
    //     ...state,
    //     productDetails: {
    //       ...state.productDetails,
    //     },
    //     allProducts: [...productDetails, productDetails],
    //   };

    default:
      return state;
  }
};

export default ProductReducer;
