import CartHeader from "../header/CartHeader";
import ArrowRight from "../Icons/ArrowRightBlack";
import "../../css/product.css";
import Loader from "../Icons/Loader";
import { Link } from "react-router-dom";

const Product3 = ({ rice, loading }) => {
  return (
    <div>
      <CartHeader />

      <div className="fruit-item-section">
        <div className="section-head">
          <div>
            <p>RICE</p>
          </div>

          <div>
            <p>NOODLES</p>
          </div>
        </div>

        <div className="section-body">
          <div className="left-col">
            {loading ? (
              <Loader />
            ) : (
              rice.map((riceItem) => (
                <div>
                  <div className="fruit-item" key={riceItem.id}>
                    <div className="item-cancel-btn"></div>
                    <div className="fruit-img">
                      <img src={riceItem.url} width="40%" alt="" />
                    </div>
                    <div className="fruit-text">
                      <p className="fruit-name">{riceItem.product_name}</p>
                      <p className="fruit-amount">{riceItem.quantity}kg</p>
                      <p className="fruit-price">₦10,000</p>
                    </div>
                    <div className="buy-btn">
                      <p>ADD TO CART</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div>
            {/* 
            <div className="fruit-item">
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src="/img_assets/orange.png" alt="" />
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

        <Link to="/product4">
          <div className="footer-item">
            <ArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product3;
