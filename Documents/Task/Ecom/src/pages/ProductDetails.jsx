import React from "react";
import ProductImage from "../component/ProductImage";
import Accordian from "../component/Accordian";

const ProductDetails = ({ data }) => {
  if (data) {
    return (
      <section className=" xs:px-10 md:px-10 lg:px-10 xl:px-20 2xl:px-10   bg-[#F7F7F7] ">
        <div className=" grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:min-h-[700px] py-10  my-14">
          <div className="col-span-2">
            {" "}
            <ProductImage imgs={data.image} />{" "}
          </div>
          <div className="py-4 ">
            <div className="pt-2">
              {data.availability == "In Stock" ? (
                <h3 className="text-green-700">{data.availability}</h3>
              ) : (
                <h3 className="text-red-600">{data.availability}</h3>
              )}
            </div>
            <div className="pt-4">
              <h1 className="text-3xl font-frank">{data.name}</h1>
            </div>
            <div className="pt-2  text-lg">
              <h2 className="font-lato ">
                MRP : <span className="line-through"> ₹{data.price}</span>
              </h2>
            </div>
            <div className="pt-3  text-lg">
              <h2 className="font-lato text-indigo-700">
                DEAL OF THE DAY : ₹ {data.price - data.discountValue}
              </h2>
            </div>
            <hr className="w-3/4 mt-4 " />
            <div className="pt-2 text-[#696969]">
              <p className="font-lato">{data.description}</p>
            </div>
            {/* <div className="grid grid-cols-4 pt-10 font-lato text-p-gray gap-5">
              <div>
                <TbTruckDelivery className="rounded-full h-8 w-8 bg-gray-300 p-1 text-gray-800" />
                <p>Free Delivery</p>
              </div>

              <div>
                <TbReplace className="rounded-full h-8 w-8 bg-gray-300 p-1 text-gray-800" />
                <p>30 Days Replacement</p>
              </div>

              <div>
                <TbTruckDelivery className="rounded-full h-8 w-8 bg-gray-300 p-1 text-gray-800" />
                <p>Fast Delivery </p>
              </div>

              <div>
                <MdSecurity className="rounded-full h-8 w-8 bg-gray-300 p-1 text-gray-800" />
                <p>2 Year Warranty </p>
              </div>
            </div> */}
            <hr className="w-full h-[1.2px] mt-8 bg-gray-300" />
            <div>
              <Accordian booking={data.bookingAvailability} />
            </div>
            <hr className="w-full h-[1.5px]  bg-gray-500" />
            <div>
              <Accordian
                startDate={data.discountStartDate}
                endDate={data.discountEndDate}
              />
            </div>
            <div className="py-8">
              <button className="w-full h-auto bg-indigo-500 py-2 rounded capitalize text-white font-frank text-lg hover:shadow-xl hover:bg-indigo-600">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }
};

export default ProductDetails;
