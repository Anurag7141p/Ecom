import React, { useEffect, useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import { productDetails } from "./ProductData";
import AddProduct from "./pages/AddProduct";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(productDetails);
  }, [productDetails]);

  // console.log(data);
  return (
    <div>
      <ProductDetails data={data} />
      <AddProduct/>
    </div>
  );
};

export default App;
