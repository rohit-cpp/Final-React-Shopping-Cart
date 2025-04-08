import { createContext, useEffect, useState } from "react";
export const ShoppingCartContext = createContext(null);
import React from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCartProvider = ({ children }) => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function handelCartApi() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result?.products) {
        setListOfProducts(result?.products);
        setLoading(false);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleAddToCart(getProductDetails) {
    console.log(getProductDetails);
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(
      (cartItems) => cartItems.id === getProductDetails.id
    );
    console.log(findIndexOfCurrentItem);
    if (findIndexOfCurrentItem === -1) {
      cpyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
      console.log("its comming here");
    }
    console.log(cpyExistingCartItems, "cpyExistingCartItems");
    setCartItems(cpyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    navigate("/cart");
  }
  useEffect(() => {
    handelCartApi();
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }, []);
  console.log(cartItems);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
