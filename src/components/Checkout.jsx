import Dashboard from "./Dashboard";
import "../css/checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <Dashboard />

      <div className="c-body">
        <h1>Payment Method</h1>

        <div className="card-face">
          <div className="card-header">
            <div className="card-type">
              <input type="radio" />
              <h4 className="card-name">Master card</h4>
            </div>
            <div className="choose-card">
              <img src="/img_assets/mastercard 1.png" alt="" />
              <img src="/img_assets/visa 1.png" alt="" />
              <img src="/img_assets/paypal 2.png" alt="" />
            </div>
          </div>

          <div className="card-body">
            <div className="entries">
              <p className="card-text">
                <h4>Credit card number</h4>
              </p>

              <div className="card-input">
                <input type="text" />
              </div>
            </div>
            <div className="entries">
              <div className="card-text">
                <h4>Expiry date</h4>
              </div>

              <div className="card-input">
                <input type="text" placeholder="MM/YY" />
              </div>
            </div>
            <div className="">
              <div className="card-text">
                <h4>Account name</h4>
              </div>

              <div className="card-input">
                <input type="text" />
              </div>
            </div>
            <div className="">
              <div className="card-text">
                <h4>CVV</h4>
              </div>

              <div className="card-input">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        <button className="login-btn">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default Checkout;
