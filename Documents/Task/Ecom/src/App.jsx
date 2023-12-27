import React, { useContext, useEffect, useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import { productDetails } from "./ProductData";
import AddProduct from "./pages/AddProduct";
import { useGlobalProductContext } from "./context/productContext";

const App = () => {
  const [data, setData] = useState();

  // const {allCategory}=useGlobalProductContext()
  // console.log('this is all category',allCategory);

  useEffect(() => {
    setData(productDetails);
  }, [productDetails]);

  return (
    <div>
      <ProductDetails data={data} />
      <AddProduct />
    </div>
  );
};

export default App;
