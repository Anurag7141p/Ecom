import { createContext, useContext, useEffect, useReducer } from "react";
import { categoryDetails } from "../ProductData";
import { testCategory } from "../ProductData";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const initialState = {
  subCatDetails: [],
  allCategory: [],
  productDetails: {
    categoryId: "",
    categoryName: "",
    subCategoryName: "",
    productName: "",
    brandName: "",
    modelNumber: "",
    manufacturingYear: "",
    description: "",
    currency: "",
    amount: "",
    discount: {
      discountValue: "",
      discountType: "",
      minimum: "",
    },
    maxDiscount: "",
    image: "",
    booking: "",

  },
  fields: [],
  // allProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllProductDetails = (data) => {
    dispatch({ type: "SET_ADD_PRODUCT_DATA", payload: data });
  };

  const getAllCategory = (category) => {
    dispatch({ type: "SET_ALL_CATEGORY", payload: category });
  };

  const productHandleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const image = e.target.file;
    dispatch({ type: "ADD_PRODUCTS", payload: { name, value, image } });
  };

  const setCategory = (selectCategory, selectSubCategory) => {
    const id = selectSubCategory.categoryId;
    const extraFields = selectSubCategory.fields;

    dispatch({
      type: "SAVE_CATEGORIES",
      payload: { selectCategory, selectSubCategory, id, extraFields },
    });
  };

  // const listProducts = (productList) => {
  //   dispatch({ type: "LIST_PRODUCTS", payload: productList });
  // };

  useEffect(() => {
    getAllProductDetails(categoryDetails);
    getAllCategory(testCategory);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, productHandleInputs, setCategory }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalProductContext };
