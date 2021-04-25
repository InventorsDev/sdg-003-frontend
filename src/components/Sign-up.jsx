import Dashboard from "./Dashboard";
import "../Sign-up.css";
import UserIcon3 from "./Icons/UserIcon3";
import UserIcon2 from "./Icons/UserIcon2";
import MessageIcon from "./Icons/MessageIcon";
import PasswordIcon from "./Icons/PasswordIcon";
import Verify from "./Icons/Verify";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <Dashboard />

      <div className="body">
        <div className="form-container-2">
          <div className="form-head">
            <p>SIGN UP</p>
          </div>
          <div className="form-inputs">
            <div className="form-input">
              <div className="form-icon">
                <UserIcon2 />
              </div>
              <input
                type="text"
                className="form-input-content"
                placeholder="Username"
              />
            </div>
            <div className="form-input">
              <div className="form-icon">
                <MessageIcon />
              </div>
              <input
                type="text"
                className="form-input-content"
                placeholder="Email address"
              />
            </div>
            <div className="form-input">
              <div className="form-icon">
                <PasswordIcon />
              </div>
              <input
                type="text"
                className="form-input-content"
                placeholder="Password"
              />
            </div>
            <div className="form-input">
              <div className="form-icon"></div>
              <input
                type="text"
                className="form-input-content"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="terms">
            <div className="terms-icon">
              <Verify />
            </div>
            <p>I accept all terms and conditions</p>
          </div>

          <button className="login-btn">SIGN UP</button>

          <Link to="/login">
            <div className="login-link">Proceed to login?</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
