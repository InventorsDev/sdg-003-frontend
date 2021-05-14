import React, { useEffect, useState } from "react";
import CartHeader from "./header/CartHeader";
import Product from "./section/Products"
import axios from "axios";

const AllProducts = () => {
    const [items, setItems] = useState([]);
    const addProductToCart = (product) => {
        
    };

    useEffect(() => {
        async function fetchData(){
            const data =  await axios.get(
                `https://agrico-market.000webhostapp.com/api/products`
            );
            console.log(data.data.data)
            setItems(data.data.data);
        } 
        fetchData()
      }, []);

    return (
        <div>
            <CartHeader />
            <div className="left-col">
                {items.map((p) => (
                    <Product
                        id={p.id}
                        imageURL={p.url}
                        title={p.product_name}
                        qty={p.quantity}
                        price={p.unit_price}
                        addProductToCart={addProductToCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllProducts;