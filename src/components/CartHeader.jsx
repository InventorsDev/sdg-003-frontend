import "../CartHeader.css";
import CartIcon from "./Icons/CartIcon";
import SearchIcon2 from "./Icons/SearchIcon2";
import UserIcon from "./Icons/UserIcon";
import {Link} from "react-router-dom"
const CartHeader = () => {
  return (
    <div className="cart-header">
      <div className="left">
        <div className="menu">
          <img src="https://img.icons8.com/android/24/000000/menu.png" alt="img"/>
        </div>

        <Link to="/" className="company-title">
          Agrico Market
        </Link>
      </div>

      <div className="right">
        <div className="cart-search">
          <input type="text" placeholder="search fruits, food items" />

          <SearchIcon2 />
        </div>

        <Link to="/cart">
          <div className="cart-icon">
            <CartIcon />
          </div>
        </Link>

        <Link to="/login">
          <div className="user-icon">
            <UserIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartHeader;
