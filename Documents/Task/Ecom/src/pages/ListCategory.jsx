import React, { useState } from "react";
import SelectCategory from "../component/SelectCategory";

const ListCategory = ({ name, categoryList }) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [CategoryData, setCategoryData] = useState(name);

  const categorySet = (curElem) => {
    setCategoryData(curElem);
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className="relative inline-block text-left font-lato ">
      <SelectCategory
        setToggleBtn={setToggleBtn}
        toggleBtn={toggleBtn}
        CategoryData={CategoryData}
      />

      {toggleBtn ? (
        <div
          className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {categoryList.map((curElem) => (
              <a
                href="javascript:void()"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-0"
                onClick={() => categorySet(curElem)}
              >
                {curElem}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ListCategory;
