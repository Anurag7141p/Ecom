import React, { useState } from "react";
import ListCategory from "./ListCategory";
import { categoryList, subCategoryList } from "../ProductData";
import AddProductDetails from "../component/AddProductDetails";

const AddProduct = () => {
  const [categorySelection, setCategorySelection] = useState(false);
  const [discountValue, setDiscountValue] = useState("");
  console.log(discountValue);

  return (
    <div className="h-[700px] my-20 px-24  ">
      <div className="grid grid-cols-6  bg-slate-200">
        <div className="col-span-4 flex ">
          {categorySelection == true ? (
            <div className="col-span-4 flex gap-20 pt-12 px-14 font-lato capitalize  ">
              <AddProductDetails discountValue={discountValue} />
            </div>
          ) : (
            <div className="col-span-4 flex p-64 gap-14  items-center ">
              <div>
                <ListCategory
                  name={"Select Category"}
                  categoryList={categoryList}
                />
              </div>
              <div>
                <ListCategory
                  name={"Sub Category"}
                  categoryList={subCategoryList}
                />
              </div>
            </div>
          )}
        </div>
        <div className="bg-blue-600  h-[700px] w-full col-span-2 grid content-center ">
          <div className="p-8 text-slate-300 capitalize">
            <h2 className="text-2xl font-lato">Add your product</h2>
            <p className="text-md font-frank py-10 xl:py-10 2xl:py-10 lg:py-4 md:py-4">
              the rental store will host all the products you are putting on
              rent
            </p>
            {categorySelection ? (
              <button
                className="bg-blue-800 px-5 py-2 rounded"
                onClick={() => setCategorySelection(!categorySelection)}
              >
                Back
              </button>
            ) : null}
            <button
              className="bg-blue-800 px-5 py-2 ml-3 rounded"
              onClick={() => setCategorySelection(true)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
