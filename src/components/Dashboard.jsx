import { Link } from "react-router-dom";
import Hamburger from "./Icons/Hamburger";
import HomeIcon from "./Icons/HomeIcon";
import CartIcon3 from "./Icons/CartIcon3";
import MarketIcon3 from "./Icons/MarketIcon3";
import "../css/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="nav-items">
        <div className="nav-item">
          <Hamburger />
        </div>
        <Link to="/" className="nav-item">
          <div className="nav-item-icon">
            <HomeIcon />
          </div>
          <div className="nav-item-text">
            <p>Home</p>
          </div>
        </Link>
        <Link to="" className="nav-item">
          <div className="nav-item-icon">
            <CartIcon3 />
          </div>
          <div className="nav-item-text">
            <p> Cart</p>
          </div>
        </Link>

        <Link to="/market" className="nav-item">
          <div className="nav-item-icon">
            <MarketIcon3 />
          </div>
          <div className="nav-item-text">
            <p>Market</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
