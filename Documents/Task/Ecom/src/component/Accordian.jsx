import React, { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import DiscountDate from "./DiscountDate";

const Accordian = ({ booking, startDate, endDate }) => {
  const [accordianOpen, setAccordian] = useState(false);

  return (
    <div className="pt-3 font-lato text-lg ">
      <div className="flex justify-between w-full">
        {startDate && endDate ? (
          <h3 className="capitalize text-gray-700 text-base">DISCOUNT SALE</h3>
        ) : (
          <h3 className="capitalize text-gray-700 text-base">
            BOOKING AVAILABLITY
          </h3>
        )}

        <button onClick={() => setAccordian(!accordianOpen)}>+</button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100 pb-6 pl-5 pt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {startDate && endDate ? (
          <div className="overflow-hidden  text-p-gray">
            <div className="flex items-center gap-3">
              <div>
                <FaCalendarCheck className="text-indigo-500" />
              </div>
              <div>
                Start Date :<DiscountDate date={startDate} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaCalendarTimes className="text-indigo-500" />
              </div>
              <div>
                End Date :<DiscountDate date={endDate} />
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden  text-green-600">{booking}</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
