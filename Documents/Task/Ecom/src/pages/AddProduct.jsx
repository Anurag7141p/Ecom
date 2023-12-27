import React, { useState } from "react";
// import ListCategory from "./ListCategory";
import AddProductDetails from "../component/AddProductDetails";
import { useGlobalProductContext } from "../context/productContext";

const AddProduct = () => {
  const [categorySelection, setCategorySelection] = useState(false);
  const [discountValue, setDiscountValue] = useState("");
  const [removeNxtBtn, setRemoveNxtBtn] = useState(false);

  const [toggleBtn, setToggleBtn] = useState(false);
  const [subCateToggleBtn, setSubCateToggleBtn] = useState(false);
  const [sortedCatList, setSortedCatList] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [selectSubCategory, setSelectSubCategory] = useState("");

  const {
    subCatDetails,
    allCategory,
    productDetails,
    productHandleInputs,
    setCategory,
  } = useGlobalProductContext();

  const categorySet = (curElem) => {
    setSelectCategory(curElem);
    setToggleBtn(!toggleBtn);
    const listSubCat = subCatDetails.filter((data) => {
      return data.categoryId === curElem.id;
    });
    setSortedCatList(listSubCat);
  };

  const categorySave = () => {
    setCategorySelection(true);
    setRemoveNxtBtn(true);
    setCategory(selectCategory, selectSubCategory);
  };

  const subCatSet = (curElem) => {
    setSubCateToggleBtn(!subCateToggleBtn);
    setSelectSubCategory(curElem);
  };

  const backBtn = () => {
    setCategorySelection(!categorySelection);
    setRemoveNxtBtn(false);
  };

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
                <div className="relative inline-block text-left font-lato ">
                  <div className="py-2">
                    <h1>Select Category</h1>
                    <button
                      type="button"
                      className="inline-flex w-full min-w-20 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => setToggleBtn(!toggleBtn)}
                    >
                      {selectCategory.name}
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {toggleBtn ? (
                    <div
                      className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        {allCategory.map((curElem) => (
                          <a
                            href="javascript:void()"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            name="categoryName"
                            id="menu-item-0"
                            onClick={() => categorySet(curElem)}
                          >
                            {curElem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* sub category selection */}

              <div>
                <div className="relative inline-block text-left font-lato ">
                  <div className="py-2">
                    <h1>Select Sub Category</h1>
                    <button
                      type="button"
                      className="inline-flex w-full min-w-20 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => setSubCateToggleBtn(!subCateToggleBtn)}
                    >
                      {selectSubCategory.subcategoryName}
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {subCateToggleBtn ? (
                    <div
                      className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        {sortedCatList.map((curElem) => (
                          <a
                            href="javascript:void()"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-0"
                            name="subCategoryName"
                            onClick={() => subCatSet(curElem)}
                          >
                            {curElem.subcategoryName}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
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
                onClick={() => backBtn()}
              >
                Back
              </button>
            ) : null}

            {removeNxtBtn ? null : (
              <button
                className="bg-blue-800 px-5 py-2 ml-3 rounded"
                onClick={() => categorySave()}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
