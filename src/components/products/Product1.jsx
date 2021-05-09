import CartHeader from "../header/CartHeader";
import ArrowRight from "../Icons/ArrowRightBlack";
import "../../css/product.css";
import { Link } from "react-router-dom";
import Loader from "../Icons/Loader"; 
import Product from "./Product"

import { connect } from "react-redux";

const Product1 = ({ fruits, loading}) => {
  // const addBtn = document.getElementByClassName("buy-btn");

  const addToCart = () => {
    console.log("added to cart");
  };

  return (
    <div>
      <CartHeader />

      <div className="fruit-item-section">
        <div className="section-head">
          <p>FRUITS</p>
        </div>

        <div className="section-body">
          <div>
            {loading ? (
              <Loader />
            ) : (
              <div className="left-col">
                {fruits.map((fruit) => (
                  <div className="fruit-item" key={fruit.id}>
                    <div className="item-cancel-btn"></div>
                    <div className="fruit-img">
                      <img src={fruit.url} alt="" width="70%" />
                    </div>
                    <div className="fruit-text">
                      <p className="fruit-name">{fruit.product_name}</p>
                      <p className="fruit-amount">
                        {fruit.quantity} Basket full
                      </p>
                      <p className="fruit-price">₦{fruit.unit_price}</p>
                    </div>
                    <div className="buy-btn" onClick={addToCart}>
                      <p>ADD TO CART</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Link to="/product2" className="footer-item">
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

const mapStateProduct = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateProduct)(Product1);
