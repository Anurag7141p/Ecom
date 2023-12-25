import React, { useEffect, useState } from "react";

const DiscountDate = ({ date }) => {
  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    const dateString = date;
    const dateObject = new Date(dateString);

    const formattedDateString = dateObject.toLocaleString("en-IN", {
      timeZone: "UTC",
    });

    setFormattedDate(formattedDateString);
  }, []);

  return formattedDate;
};

export default DiscountDate;
