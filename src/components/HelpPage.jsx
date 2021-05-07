import "../helppage.css";
import CartHeader from "./CartHeader";
import SearchIcon2 from "./Icons/SearchIcon2";
import YTIcon from "./Icons/YTIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import FbIcon from "./Icons/FbIcon";

const HelpPage = () => {
  return (
    <div className="help-page">
      <CartHeader />

      <div className="help-body">
        <div className="help-section-one">
          <h1>NEED HELP?</h1>
          <h4>Hi!, What's your question?</h4>
        </div>

        <div className="help-input">
          <input type="text" placeholder="Describe your issue"/>
          <SearchIcon2 />
        </div>

        <div className="help-section-two">
          <div className="help-feature">
            <img src="/img_assets/car.svg" alt="" />

            <h3> Place and Track Order</h3>
          </div>

          <div className="help-feature">
            <img src="/img_assets/cart.svg" alt="" />

            <h3> Place and Track Order</h3>
          </div>

          <div className="help-feature">
            <img src="/img_assets/exchange.svg" alt="" />

            <h3> Place and Track Order</h3>
          </div>
        </div>
      </div>

      <div className="help-footer">
        <h3>CONTACT US</h3>

        <div className="media">
          <div className="media-icons">
            <div className="media-icon">
              <YTIcon />
            </div>

            <div className="media-icon">
              <TwitterIcon />
            </div>

            <div className="media-icon">
              <FbIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
