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
      (cartItem) => cartItem.id === getProductDetails.id
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
      cpyExistingCartItems[findIndexOfCurrentItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1) *
          cpyExistingCartItems[findIndexOfCurrentItem].price,
      };
    }
    console.log(cpyExistingCartItems, "cpyExistingCartItems");
    setCartItems(cpyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    navigate("/cart");
  }

  function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentCartItems = cpyExistingCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );
    if (isFullyRemoveFromCart) {
      cpyExistingCartItems.splice(findIndexOfCurrentCartItems, 1);
    } else {
      cpyExistingCartItems[findIndexOfCurrentCartItems] = {
        ...cpyExistingCartItems[findIndexOfCurrentCartItems],
        quantity:
          cpyExistingCartItems[findIndexOfCurrentCartItems].quantity - 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentCartItems].quantity - 1) *
          cpyExistingCartItems[findIndexOfCurrentCartItems].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    setCartItems(cpyExistingCartItems);
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
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
