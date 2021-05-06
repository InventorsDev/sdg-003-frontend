import ".././Login.css";
import UserIcon2 from "./Icons/UserIcon2";
import PasswordIcon from "./Icons/PasswordIcon";
import Dashboard from "./Dashboard";
import "../dashboard.css";
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <Dashboard />
      <div className="body">
        <div className="body-main">
          <div className="form-container">
            <form className="new-form" action="">
              <div className="form-head">
                <p>Login</p>
              </div>

              <div className="user-detail">
                <div className="input-icon">
                  <UserIcon2 />
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="login-input first"
                />
              </div>
              <div className="user-detail">
                <div className="input-icon">
                  <PasswordIcon />
                </div>
                <input
                  type="text"
                  placeholder="Password"
                  className="login-input"
                />
              </div>
            </form>
            <div className="others">
              <div className="remember">Remember me?</div>

              <div className="forgot">Forgot my password?</div>
            </div>

            <button className="login-btn">LOGIN</button>

            <Link to="/signup">
              <div className="register">
                <p>Don't have an account?</p>
                <span>Create an account</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
