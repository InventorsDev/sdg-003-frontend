import "../HomePage.css";
import CartIcon from "./Icons/CartIcon";
import MarketIcon from "./Icons/MarketIcon";
import SearchIcon from "./Icons/SearchIcon";
import UserIcon from "./Icons/UserIcon";
import Svg from "../svg/vector.svg";
import { Link } from "react-router-dom";
import MarketIcon2 from "./Icons/MarketIcon2";
import InfoIcon from "./Icons/InfoIcon";

const HomePage = () => {
  return (
    <div class="HomePage">
      <div className="header">
        <div className="logo-icon">
          <MarketIcon />
        </div>

        <div className="search">
          <div className="">
            <select className="category" name="Food" id="">
              <option value="All category">
                Search products, brands and categories
              </option>
              <option value="rice">Rice</option>
              <option value="beans">Beans</option>
            </select>
          </div>

          <div className="itemSearch">
            <input
              type="text"
              placeholder="Enter your keyword"
              className="searchItems"
            />
          </div>

          <div className="icon-grid">
            <SearchIcon />
          </div>
        </div>

        <nav className="nav-list">
          <Link to="/" className="nav-links active">
            HOME
          </Link>

          <Link to="/market" className="nav-links">
            MARKET
          </Link>
        </nav>

        <div className="other-pages">
          <div>
            <Link to="/Login" className="user page-link">
              <UserIcon />
              <div className="user-text link-icon">Login</div>
            </Link>
          </div>
          <div>
            <Link to="/HelpPage" className=" page-link">
              <InfoIcon />
              <div className="login-text link-icon">Help</div>
            </Link>
          </div>

          <div className="cart">
            <Link to="/cart" className="page-link">
              <CartIcon />
              <div className="cart-text link-icon">Cart</div>
            </Link>
          </div>
        </div>
      </div>

      <main>
        <div className="text">
          <div className="main-text">
            <p className="text-1">
              Ready to <br /> supply fresh and <br /> edible foods{" "}
              <span>to you</span>
            </p>
          </div>

          <div className="sub-text">
            <p className="text-2">
              The food we provide is supplied from our garden, <br /> we
              guarantee quality and freshness
            </p>
          </div>
        </div>
        <img src={Svg} alt="" className="homeImage" />
      </main>

      <div className="mobile-main">
        <MarketIcon2 />
        <p className="agrico">
          AGRICO <br />
          <span>MARKET</span>
        </p>

        <div className="mini-text-head">Welcome back</div>

        <div className="mini-text-body">
          The food we provide is supplied directly from our garden, we guarantee
          quality and freshness
        </div>
      </div>

      <div className="footer">
        <Link to="/market" className="shop">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
