import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalProductContext } from "../context/productContext";

const AddProductDetails = () => {
  const { productHandleInputs, productDetails, fields } =
    useGlobalProductContext();
    
  const [discountValue, setDiscountValue] = useState("");
  const [inputBox, setInputBox] = useState("");
  const [dropDown, setDropDown] = useState("");

  console.log(fields);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
    alert("product added successfully");
    // listProducts(productDetails)
  };

  // console.log(allProducts);

  console.log("this is inputbox", inputBox);
  console.log("this is dropdown", dropDown);

  useEffect(() => {
    const inputbox = fields.filter((curElem) => {
      return curElem.type == "inputbox";
    });

    const dropdown = fields.filter((curElem) => {
      return curElem.type == "dropdown";
    });
    setInputBox(inputbox);
    setDropDown(dropdown);
  }, []);
  return (
    <div>
      <div className="col-span-4c flex gap-20  px-14 font-lato capitalize  ">
        <form onSubmit={handleSubmit} className="flex gap-14">
          <div className="col-span-2 ">
            <h2 className="pt-5 pb-4 pl-2 font-frank text-xl">
              Product Details
            </h2>
            <div className="py-4">
              <div className="py-4">
                <input
                  className="pl-6 py-2 w-72 placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  autoComplete="off"
                  value={productDetails.productName}
                  onChange={productHandleInputs}
                  required
                />
              </div>
              <div className="py-4">
                <input
                  className="pl-6 py-2 w-72 placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="text"
                  name="brandName"
                  placeholder="Brand Name"
                  autoComplete="off"
                  value={productDetails.brandName}
                  onChange={productHandleInputs}
                  required
                />
              </div>
              <div className="py-4">
                <input
                  className="pl-6 py-2 w-72  placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="text"
                  name="modelNumber"
                  placeholder="Model Number"
                  autoComplete="off"
                  value={productDetails.modelNumber}
                  onChange={productHandleInputs}
                  required
                />
              </div>

              <div className="py-4">
                <input
                  className="pl-6 py-2 w-72  placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="number"
                  name="manufacturingYear"
                  placeholder="Manufacturing Year"
                  autoComplete="off"
                  value={productDetails.manufacturingYear}
                  onChange={productHandleInputs}
                  required
                />
              </div>
              <div className="py-4">
                <textarea
                  className="pl-6 py-2 w-72  placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="text"
                  name="description"
                  placeholder="Enter Product Description here...."
                  autoComplete="off"
                  value={productDetails.description}
                  onChange={productHandleInputs}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="pt-6 pb-4 text-xl font-frank ">Product Pricing</h2>
            <div className="py-6 ">
              <div className="flex gap-8 items-center">
                {dropDown ? (
                  dropDown.map((curElem) => (
                    <div>
                      <h1>{curElem.name}</h1>
                      <select
                        name={curElem.name}
                        className="px-3 py-1 text-sm bg-slate-50 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                        onChange={productHandleInputs}
                      >
                        {curElem.value.map((curValues) => (
                          <option value={curValues}>{curValues}</option>
                        ))}
                      </select>
                    </div>
                  ))
                ) : inputBox ? (
                  <h1>input box</h1>
                ) : null}
              </div>

              <div className="flex gap-8 pt-4 items-center">
                <h2>Currency</h2>
                <select
                  name="currency"
                  className="px-3 py-1 text-sm bg-slate-50 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  onChange={productHandleInputs}
                  required
                >
                  <option value="INR" className="pt-2">
                    INR
                  </option>
                  <option value="#" disabled></option>
                  <option value="EUR">EUR</option>
                  <option value="#" disabled></option>
                  <option value="AED">AED</option>
                </select>
              </div>
              <div className="flex gap-5 items-center my-8">
                <h2>Amount</h2>
                <input
                  className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="number"
                  min="1"
                  step="any"
                  name="amount"
                  placeholder="$ 0.00"
                  autoComplete="off"
                  value={productDetails.amount}
                  onChange={productHandleInputs}
                  required
                />
              </div>
              <div className="flex gap-5 items-center my-8">
                <h2>Discount</h2>
                <input
                  className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="number"
                  name="discount"
                  placeholder="0%"
                  autoComplete="off"
                  value={productDetails.discount.discountValue}
                  onChange={productHandleInputs}
                  required
                />
                <select
                  name="discountType"
                  className="px-3 py-1 text-sm bg-slate-50 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  onClick={(e) => setDiscountValue(e.target.value)}
                  onChange={productHandleInputs}
                  required
                >
                  <option value="fixed" className="pt-2">
                    FIXED
                  </option>
                  <option value="#" disabled></option>
                  <option value="amount">Amount</option>
                  <option value="#" disabled></option>
                  <option value="hour">Hour</option>
                  <option value="#" disabled></option>
                  <option value="days">Days</option>
                </select>
              </div>
              {discountValue == "amount" ? (
                <div className="flex gap-5 items-center my-8">
                  <h2 className="pl-28">Minimum</h2>
                  <input
                    className="pl-2 py-1 w-24  placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                    type="number"
                    name="minimum"
                    placeholder="₹ 0.00"
                    autoComplete="off"
                    value={productDetails.discount.minimum}
                    onChange={productHandleInputs}
                    required
                  />
                </div>
              ) : discountValue == "hour" ? (
                <div className="flex gap-5 items-center my-8">
                  <h2 className="pl-28">Minimum</h2>
                  <input
                    className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                    type="number"
                    name="minimum"
                    placeholder="0.00 Hour"
                    autoComplete="off"
                    value={productDetails.discount.minimum}
                    onChange={productHandleInputs}
                    required
                  />
                </div>
              ) : discountValue == "days" ? (
                <div className="flex gap-5 items-center my-8">
                  <h2 className="pl-28">Minimum</h2>
                  <input
                    className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                    type="number"
                    name="minimum"
                    placeholder="0 Days"
                    autoComplete="off"
                    value={productDetails.discount.minimum}
                    onChange={productHandleInputs}
                    required
                  />
                </div>
              ) : null}
              <div className="flex gap-5 items-center my-8">
                <h2>Max-Discount</h2>
                <input
                  className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="number"
                  name="maxDiscount"
                  placeholder="0%"
                  autoComplete="off"
                  value={productDetails.maxDiscount}
                  onChange={productHandleInputs}
                  required
                />
              </div>
              <div className="flex gap-5 items-center my-8">
                <h2>Attach Image</h2>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={productHandleInputs}
                  required
                />
              </div>
              <div className="flex gap-5 items-center my-8 ">
                <h2>Booking Availability</h2>
                <select
                  name="booking"
                  className="px-3 py-2 text-sm bg-slate-50 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  onChange={productHandleInputs}
                  required
                >
                  <option value="fixed" className="pt-2">
                    Online/Offline/Both
                  </option>
                  <option value="#" disabled></option>
                  <option value="online">Online</option>
                  <option value="#" disabled></option>
                  <option value="offline">Offline</option>
                  <option value="#" disabled></option>
                  <option value="both">Both</option>
                </select>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded text-white "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductDetails;
