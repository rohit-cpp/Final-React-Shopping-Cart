import { createContext, useEffect, useState } from "react";
export const ShoppingCartContext = createContext(null);
import React from "react";

const ShoppingCartProvider = ({ children }) => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

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
  }
  useEffect(() => {
    handelCartApi();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
