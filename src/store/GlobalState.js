import React, { useReducer, useEffect, useState } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";
import axios from "axios";

// const data = await axios(
//   `https://agrico-market.000webhostapp.com/api/products`
// );

// const result = data.data.data;

// console.log(result);

// const [items, setItems] = useState([]);
// setItems(result);

function FetchItem(){

  const [items, setItems] = useState([])
  
  useEffect(()=> {
    const data = axios(
      `https://agrico-market.000webhostapp.com/api/products`
    );
    const result = data.data.data;
    console.log(result);
  })
}



const GlobalState = (props) => {
  const products = [
    
    {
      id: 1,
      product_name: "Apple",
      unit_price: "100",
      quantity: "30",
      category_id: 1,
    },
    {
      id: 2,
      product_name: "Mangoes",
      unit_price: "80",
      quantity: "30",
      category_id: 1,
    },
    {
      id: 3,
      product_name: "Bannana",
      unit_price: "300",
      quantity: "30",
      category_id: 1,
    },
    {
      id: 4,
      product_name: "Pine-apple",
      unit_price: "300",
      quantity: "30",
      category_id: 1,
    },
    {
      id: 5,
      product_name: "Watermelon",
      unit_price: "500",
      quantity: "30",
      category_id: 1,
    },
    {
      id: 6,
      product_name: "Carrot",
      unit_price: "100",
      quantity: "50",
      category_id: 2,
    },
    {
      id: 7,
      product_name: "Tomatoes(Full Basket)",
      unit_price: "30000",
      quantity: "50",
      category_id: 2,
    },
    {
      id: 8,
      product_name: "Fresh Pepper(Full Basket)",
      unit_price: "20000",
      quantity: "50",
      category_id: 2,
    },
    {
      id: 9,
      product_name: "Onion(Full Basket)",
      unit_price: "10000",
      quantity: "50",
      category_id: 2,
    },
    {
      id: 10,
      product_name: "Honey Beans(1kg)",
      unit_price: "14000",
      quantity: "30",
      category_id: 3,
    },
    {
      id: 11,
      product_name: "White Beans",
      unit_price: "14000",
      quantity: "30",
      category_id: 3,
    },
    {
      id: 12,
      product_name: "25kg Honey Beans",
      unit_price: "19250",
      quantity: "30",
      category_id: 3,
    },
    {
      id: 13,
      product_name: "25kg Mamas Pride",
      unit_price: "14000",
      quantity: "30",
      category_id: 4,
    },
    {
      id: 14,
      product_name: "50kg Cap Rice",
      unit_price: "15000",
      quantity: "30",
      category_id: 4,
    },
    {
      id: 15,
      product_name: "Basmati Rice",
      unit_price: "10000",
      quantity: "30",
      category_id: 4,
    },
    {
      id: 16,
      product_name: "5 litres Kings Groundnut Oil",
      unit_price: "5000",
      quantity: "30",
      category_id: 5,
    },
    {
      id: 17,
      product_name: "5 litres Kings Groundnut Oil",
      unit_price: "3000",
      quantity: "30",
      category_id: 5,
    },
    {
      id: 18,
      product_name: "25kg Mamas Pride",
      unit_price: "5050",
      quantity: "30",
      category_id: 5,
    },
    {
      id: 19,
      product_name: "Indomitables(Carton)",
      unit_price: "2500",
      quantity: "30",
      category_id: 6,
    },
    {
      id: 20,
      product_name: "Golden Penny Spaghetti(Carton)",
      unit_price: "4500",
      quantity: "30",
      category_id: 6,
    },
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
