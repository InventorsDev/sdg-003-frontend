import React, { useReducer, useEffect, useState } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

// const data = await axios(
//   `https://agrico-market.000webhostapp.com/api/products`
// );

// const result = data.data.data;

// console.log(result);

// const [items, setItems] = useState([]);
// setItems(result);




const GlobalState = (props) => {
  const products = [
    
   
  ];
  const [state, dispatch] = useReducer(Reducer, { cart: [] });

  //add products to cart
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  //remove products from cart

  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  //clear productsfrom cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };
  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        cart: state.cart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
