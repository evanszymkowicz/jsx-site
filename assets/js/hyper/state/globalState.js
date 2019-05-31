var companyInfo = {
  //regular object, no JSON
  title: " Restaurant",
  phone: "202-555-5555",
  location: "Washington, D.C."
};

var seasonalMenu = [
  {
    title: "",
    description: "",
    price: 25
  }
];

var reviews = [
  {
    author: "",
    outlet: "",
    authorID: "",
    slugLine: "",
    review: ""
  }
];

var dankQuotes = [
  {
    author: "",
    quote: ""
  }
];

export const globalState = {
  count: 0,
  companyInfo, //older versions of JS would require setting the property equal to the variable
  seasonalMenu,
  reviews,
  dankQuotes,
  reviewCount: {
    currentReview: 1
  }
};
