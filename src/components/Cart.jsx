import "../css/Cart.css";
import CartHeader from "./header/CartHeader";
import ArrowRightBlack from "./Icons/ArrowRightBlack";
const Cart = () => {
  return (
    <div className="item-market">
      <CartHeader />

      <div className="cart-body">
        <div className="page-name">
          <p>SHOPPING CART</p>
          <span>Your order is ready for shipping and delivery</span>
        </div>

        <div className="ordered-items">
          <div className="col-header">
            <div className="items-name">ITEMS</div>
            <div className="quantities">QUANTITY</div>
            <div className="prices">UNIT PRICE</div>
            <div className="total-text">SUB TOTAL</div>
          </div>

          <div className="measurement">
            <div className="m-item item-obj">
              <div className="cancel-btn"></div>
              <div className="item-prop">
                <img src="/img_assets/pinaple.png" width="50" alt="" />

                <div className="item-obj-name">
                  <p>A basket full of pineapple</p>
                </div>
              </div>
            </div>
            <div className="m-item quantity">
              <select name="quantity" id="" className="quantity-input">
                <option className="number">1</option>
                <option className="number">2</option>
                <option className="number">3</option>
                <option className="number">4</option>
                <option className="number">5</option>
                <option className="number">6</option>
                <option className="number">7</option>
                <option className="number">8</option>
                <option className="number">9</option>
              </select>
            </div>
            <div className="m-item price">
              <p>₦3500</p>
            </div>
            <div className="m-item total">
              <p>₦3500</p>
            </div>
          </div>

          <div className="measurement">
            <div className="m-item item-obj">
              <div className="cancel-btn"></div>
              <div className="item-prop">
                <img
                  src="/img_assets/1__1_-removebg-preview 2.png"
                  width="50"
                  alt=""
                />

                <div className="item-obj-name">
                  <p>A basket full of pineapple</p>
                </div>
              </div>
            </div>
            <div className="m-item quantity">
              <select name="quantity" id="" className="quantity-input">
                <option className="number">1</option>
                <option className="number">2</option>
                <option className="number">3</option>
                <option className="number">4</option>
                <option className="number">5</option>
                <option className="number">6</option>
                <option className="number">7</option>
                <option className="number">8</option>
                <option className="number">9</option>
              </select>
            </div>
            <div className="m-item price">
              <p>₦3500</p>
            </div>
            <div className="m-item total">
              <p>₦3500</p>
            </div>
          </div>

          <div className="measurement">
            <div className="m-item item-obj">
              <div className="cancel-btn"></div>
              <div className="item-prop">
                <img src="/img_assets/oIL.png" width="50" alt="" />

                <div className="item-obj-name">
                  <p style={{ marginLeft: "1rem" }}>
                    A basket full of pineapple
                  </p>
                </div>
              </div>
            </div>
            <div className="m-item quantity">
              <select name="quantity" id="" className="quantity-input">
                <option className="number">1</option>
                <option className="number">2</option>
                <option className="number">3</option>
                <option className="number">4</option>
                <option className="number">5</option>
                <option className="number">6</option>
                <option className="number">7</option>
                <option className="number">8</option>
                <option className="number">9</option>
              </select>
            </div>
            <div className="m-item price">
              <p>₦3500</p>
            </div>
            <div className="m-item total">
              <p>₦3500</p>
            </div>
          </div>

          <div className="total-sum">
            <p>
              TOTAL: <span>₦240000</span>
            </p>
          </div>

          <div className="cart-footer">
            <div className="shopping-btn">CONTINUE SHOPPING</div>

            <div className="checkout-btn">CHECKOUT</div>
          </div>

          <div className="switch">
            <ArrowRightBlack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
