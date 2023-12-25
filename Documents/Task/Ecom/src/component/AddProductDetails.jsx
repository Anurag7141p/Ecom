import React from "react";

const AddProductDetails = ({discountValue}) => {
  return (
    <div>
      <div className="col-span-4c flex gap-20 pt-12 px-14 font-lato capitalize  ">
        <div className="col-span-2 ">
          <h2 className="pt-12 pb-4 pl-2 font-frank text-xl">
            Product Details
          </h2>
          <div className="py-4">
            <input
              className="pl-6 py-2 w-72 placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
              type="text"
              name="product name"
              placeholder="Product Name"
              autoComplete="off"
            />
          </div>
          <div className="py-4">
            <input
              className="pl-6 py-2 w-72 placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
              type="text"
              name="brand name"
              placeholder="Brand Name"
              autoComplete="off"
            />
          </div>
          <div className="py-4">
            <input
              className="pl-6 py-2 w-72  placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
              type="text"
              name="model name"
              placeholder="Model Number"
              autoComplete="off"
            />
          </div>
          <div className="py-4">
            <input
              className="pl-6 py-2 w-72  placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
              type="text"
              name="serial number"
              placeholder="Serial Number"
              autoComplete="off"
            />
          </div>
          <div className="py-4">
            <input
              className="pl-6 py-2 w-72  placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
              type="text"
              name="manufacturing year "
              placeholder="Manufacturing Year"
              autoComplete="off"
            />
          </div>
          <div className="py-4">
            <textarea
              className="pl-6 py-2 w-72  placeholder-gray-600 rounded-xl border-none ring-1 ring-gray-500   focus:outline-blue-500"
              type="text"
              name="description"
              placeholder="Enter Product Description here...."
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="pt-12 pb-4 text-xl font-frank ">Product Pricing</h2>
          <div className="py-6 ">
            <div className="flex gap-8 items-center">
              <h2>Currency</h2>
              <select
                name="currency"
                className="px-3 py-1 text-sm bg-slate-50 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
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
              />
              <select
                name="amount"
                className="px-3 py-1 text-sm bg-slate-50 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
              >
                <option value="FIXED" className="pt-2">
                  FIXED
                </option>
                <option value="#" disabled></option>
                <option value="EUR">FIXED</option>
              </select>
            </div>
            <div className="flex gap-5 items-center my-8">
              <h2>Discount</h2>
              <input
                className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                type="number"
                name="discount"
                placeholder="0%"
                autoComplete="off"
              />
              <select
                name="currency"
                className="px-3 py-1 text-sm bg-slate-50 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                onClick={(e) => setDiscountValue(e.target.value)}
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
                  name="discount"
                  placeholder="₹ 0.00"
                  autoComplete="off"
                />
              </div>
            ) : discountValue == "hour" ? (
              <div className="flex gap-5 items-center my-8">
                <h2 className="pl-28">Minimum</h2>
                <input
                  className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="number"
                  name="discount"
                  placeholder="0.00 Hour"
                  autoComplete="off"
                />
              </div>
            ) : discountValue == "days" ? (
              <div className="flex gap-5 items-center my-8">
                <h2 className="pl-28">Minimum</h2>
                <input
                  className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                  type="number"
                  name="discount"
                  placeholder="0 Days"
                  autoComplete="off"
                />
              </div>
            ) : null}
            <div className="flex gap-5 items-center my-8">
              <h2>Max-Discount</h2>
              <input
                className="pl-2 py-1 w-24 placeholder-gray-600 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
                type="number"
                name="discount"
                placeholder="0%"
                autoComplete="off"
              />
            </div>
            <div className="flex gap-5 items-center my-8">
              <h2>Attach Image</h2>
              <input type="file" name="img" accept="image/*" />
            </div>
            <div className="flex gap-5 items-center my-8 ">
              <h2>Booking Availability</h2>
              <select
                name="booking"
                className="px-3 py-2 text-sm bg-slate-50 rounded-md border-none ring-1 ring-gray-500   focus:outline-blue-500"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDetails;
