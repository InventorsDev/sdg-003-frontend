import CartHeader from "./CartHeader";
import ArrowRight from "./Icons/ArrowRightBlack";
import "../product.css";
import { Link } from "react-router-dom";
import Loader from "./Icons/Loader"

const FruitItem = ({ fruits, loading }) => {
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
              <Loader/>
            ) : (
              <div className="left-col">
                {fruits.map((fruit) => (
                  <div className="fruit-item">
                    <div className="item-cancel-btn"></div>
                    <div className="fruit-img">
                      <img src="/img_assets/apple.png" alt="" />
                    </div>
                    <div className="fruit-text">
                      <p className="fruit-name">{fruit.product_name}</p>
                      <p className="fruit-amount">
                        {fruit.quantity} Basket full
                      </p>
                      <p className="fruit-price">₦{fruit.unit_price}</p>
                    </div>
                    <div className="buy-btn">
                      <p>ADD TO CART</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/apple.png" alt="" />
              </div>
              <div className="fruit-text">
                <p className="fruit-name">Apple</p>
                <p className="fruit-amount">2 Basket full</p>
                <p className="fruit-price">₦10,000</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div>
            <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/orange.png" alt="" />
              </div>
              <div className="fruit-text">
                <p className="fruit-name">Orange</p>
                <p className="fruit-amount">2 Basket full</p>
                <p className="fruit-price">₦10,500</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div>
            <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/apple.png" alt="" />
              </div>
              <div className="fruit-text">
                <p className="fruit-name">Apple</p>
                <p className="fruit-amount">2 Basket full</p>
                <p className="fruit-price">₦10,000</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div>
            <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/apple.png" alt="" />
              </div>
              <div className="fruit-text">
                <p className="fruit-name">Apple</p>
                <p className="fruit-amount">2 Basket full</p>
                <p className="fruit-price">₦10,000</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div>

            <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/apple.png" alt="" />
              </div>
              <div className="fruit-text">
                <p className="fruit-name">Apple</p>
                <p className="fruit-amount">2 Basket full</p>
                <p className="fruit-price">₦10,000</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div>
            <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/orange.png" alt="" />
              </div>
              <div className="fruit-text">
                <p className="fruit-name">Orange</p>
                <p className="fruit-amount">2 Basket full</p>
                <p className="fruit-price">₦10,500</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div>
            <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/apple.png" alt="" />
              </div>
              <div className="fruit-text">
                <p className="fruit-name">Apple</p>
                <p className="fruit-amount">2 Basket full</p>
                <p className="fruit-price">₦10,000</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div>
            <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/apple.png" alt="" />
              </div>
              <div className="fruit-text">
                <p className="fruit-name">Apple</p>
                <p className="fruit-amount">2 Basket full</p>
                <p className="fruit-price">₦10,000</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div> */}
          </div>
        </div>

        <Link to="/product2" className="footer-item">
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default FruitItem;
