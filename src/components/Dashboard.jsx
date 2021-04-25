import MenuIcon from "./Icons/MenuIcon";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="nav-items">
        <div className="nav-item">
          <MenuIcon />
        </div>
        <Link to="/">
          <div className="nav-item">Home</div>
        </Link>
        <Link to="">
          <div className="nav-item">Cart</div>
        </Link>

        <Link>
          <div className="nav-item">Categories</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
