import React, { useState, createContext } from "react";
import { products } from "../products";
import Decimal from 'decimal.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (const product of products) {
    cart[product.id] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let total = new Decimal(0);
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find((product) => product.id === parseInt(item));
        const quantity = new Decimal(cartItems[item]);
        const price = new Decimal(itemInfo.price);
        total = total.plus(quantity.times(price));
      }
    }
    return total.toFixed(2);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};
