import CartHeader from "./CartHeader";
import ArrowRight from "./Icons/ArrowRightBlack";
import Loader from "./Icons/Loader";
import "../product.css";

const Product4 = ({loading, oils}) => {
  return (

    <div>
      <CartHeader />

      <div className="fruit-item-section">
        <div className="section-head">
          <div>
            <p>PALM OIL</p>
          </div>

          <div>
            <p>OTHERS</p>
          </div>
        </div>

        <div className="section-body">
          <div className="left-col">
            {loading ? <Loader/> : (oils.map(oil => (

            <div className="fruit-item" key={oil.id}>
              <div className="item-cancel-btn"></div>
              <div className="fruit-img">
                <img src={oil.url} alt="" width="60%"/>
              </div>
              <div className="fruit-text">
                <p className="fruit-name">{oil.product_name}</p>
                <p className="fruit-amount">{oil.quantity}</p>
                <p className="fruit-price">₦{oil.unit_price}</p>
              </div>
              <div className="buy-btn">
                <p>ADD TO CART</p>
              </div>
            </div>
            )))}
            {/* <div className="fruit-item">
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

        <div className="footer-item">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Product4;
