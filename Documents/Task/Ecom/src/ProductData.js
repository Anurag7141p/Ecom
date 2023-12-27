export const productDetails = {
  name: "Sample Product",
  description:
    "This is a sample product description.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  image: [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674022/Croma%20Assets/Communication/Mobiles/Images/300819_0_aunzde.png",
    "https://media.croma.com/image/upload/v1664009258/Croma%20Assets/Communication/Mobiles/Images/243459_0_ljp1lm.png",
  ],
  status: true,
  price: 99.99,
  categoryId: "6115a41b3f6fcf1bf8f67d6d", // Replace with a valid Category ObjectId
  subcategoryId: "6115a41b3f6fcf1bf8f67d6e", // Replace with a valid SubCategory ObjectId
  brandId: "6115a41b3f6fcf1bf8f67d6f", // Replace with a valid Brand ObjectId
  availability: "In Stock",
  bookingAvailability: "Online",
  productDiscount: 10,
  categoryStatus: true,
  subCategoryStatus: true,
  brandStatus: true,
  approve: true,
  reason: "Approved",
  trialStatus: false,
  eligibleForPayment: true,
  discount: 5,
  verifiedUser: true,
  discountCondition: "Days",
  discountValue: 15,
  discountStartDate: "2023-12-01T00:00:00.000Z",
  discountEndDate: "2023-12-31T23:59:59.000Z",
  discountHours: 24,
};

// export const categoryList = ["Bike", "Car", "Camera", "House", "Room"];

// export const subCategoryList = ["A", "B", "C", "D", "E", "F", "G", "H"];

// export const test = {
//   subcategoryName: "car",
//   fieldName: "number plate",
//   type: "input box",
//   min: "7",
//   max: "7",
// };

export const categoryDetails = [
  {
    categoryId: "2255",
    image: "",
    subcategoryName: "car",
    fields: [
      {
        name: "number plate",
        type: "inputbox",
        min: "7",
        max: "7",
        datatype: "string",
      },
      {
        name: "fuel type",
        type: "dropdown",
        value: ["petrol", "diesel", "ev"],
      },
    ],
  },
  {
    categoryId: "2255",
    image: "",
    subcategoryName: "bike",
    fields: [
      {
        name: "number plate",
        type: "inputbox",
        min: "7",
        max: "7",
        datatype: "string",
      },
      {
        name: "fuel type",
        type: "dropdown",
        value: ["petrol", "diesel", "ev"],
      },
    ],
  },
  {
    categoryId: "007",
    subcategoryName: "camera",
    fields: [
      {
        name: "camera types",
        type: "dropdown",
        value: [
          "Dslr cameras",
          "mirrorless camera",
          "film cameras",
          "medium format cameras",
        ],
      },
      {
        name: "Sensor size",
        type: "dropdown",
        value: ["Full-frame", "aps-c", "micro four thirds"],
      },
    ],
  },
];

export const testCategory = [
  {
    name: "vehicle",
    image: "",
    id: "2255",
  },
  {
    name: "camera and eqp",
    image: "",
    id: "007",
  },
];
