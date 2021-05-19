import React, { useEffect, useState } from "react";
import CartHeader from "./header/CartHeader";
import Product from "./section/Products";
import axios from "axios";
import loader from "./Icons/loader.gif";
import Cart from "./Cart";

const AllProducts = () => {
  const [items, setItems] = useState([]);
  const [storeItem, setStoreItem] = useState([]);
  const AddProductToCart = (id) => {
    const cartItems = items.filter((item) => {
      return item.id === id;
    });
    
    // localStorage.setItem('item',cartItems)
    
    console.log(cartItems)
    
  };

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://agrico-market.000webhostapp.com/api/products`
      );

      setItems(data.data.data);
      setLoading(false);
      console.log(data.data.data)
    }
    fetchData();

  }, []);

  return (
    <div>
      <CartHeader />

      <div className="left-col">
        {loading ? (
          <img src={loader} alt="" className="loader-gif" />
        ) : (
          items.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              imageURL={p.url}
              title={p.product_name}
              qty={p.quantity}
              price={p.unit_price}
              AddProductToCart={AddProductToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllProducts;
