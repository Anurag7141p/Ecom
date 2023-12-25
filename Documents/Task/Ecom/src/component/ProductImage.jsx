import React, { useState } from "react";

const ProductImage = ({ imgs }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  console.log(imgs);

  return (
    <div>
      <div className=" flex justify-center">
        <div className="xs:px-1 lg:px-16 xl:px-36 2xl:px-48 ">

        <img src={mainImage} alt="" className="w-full h-auto xs:h-auto " />
        </div>
      </div>
      <div className="flex justify-center py-4 gap-24">
        {imgs.map((curElem, index) => (
          <figure key={index}>
            <img
              src={curElem}
              alt=""
              className={
                curElem == mainImage
                  ? "h-40 w-full xs:h-28 border-b-4 border-indigo-500 transition-all duration-100 p-3  bg-white rounded-t-lg"
                  : "h-40 w-full xs:h-28 hover:border-b-4 border-indigo-500 transition-all duration-100 p-3b  bg-white rounded-t-lg"
              }
              onClick={() => setMainImage(curElem)}
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
