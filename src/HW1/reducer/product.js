const initiatalStage = {
  productList: [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
    },
  ],
  selectedProduct: {
    glass: "",
  },
};
const reducer = (state = initiatalStage, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      const cloneSelectedProduct = { ...state.selectedProduct };
      cloneSelectedProduct.glass = action.payload;
      return { ...state, selectedProduct: cloneSelectedProduct };
    default:
      return { ...state };
  }
};
export default reducer;
