import "../CartHeader.css";
import CartIcon from "./Icons/CartIcon";
import SearchIcon2 from "./Icons/SearchIcon2";
import UserIcon from "./Icons/UserIcon";
const CartHeader = () => {
  return (
    <div className="cart-header">
      <div className="left">
        <div className="menu">
          <img src="https://img.icons8.com/android/24/000000/menu.png" />
        </div>

        <div className="company-title">Agrico Market</div>
      </div>

      <div className="right">
        <div className="cart-search">
          <input type="text" placeholder="search fruits, food items" />

          <SearchIcon2 />
        </div>

        <div className="cart-icon">
          <CartIcon />
        </div>

        <div className="user-icon">
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
