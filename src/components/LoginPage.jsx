
import FormIntro from "./FormIntro";
import MarketIcon from './Icons/MarketIcon'
import UserIcon from './Icons/UserIcon'
import {Link} from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="company-name">
            <MarketIcon />
            <p>Marketplace</p>
          </div>

          <div className="company-name">
            <UserIcon />
            <Link to="/">Register</Link>
          </div>
        </div>
        <div className="body">
          <div className="form-container">
            <FormIntro name="Login" greet="Good to have you back!" />

            <form action="POST" className="form-field">
              <div className="login-form">
                <div className="email-input">
                  <div className="email-title title">Email</div>
                  <input type="email" placeholder="Enter email" />
                </div>

                <div className="passowrd-input">
                  <div className="password-title title">Password</div>
                  <input type="password" placeholder="Enter password" />
                </div>
              </div>
              <div className="btn reg-btn">Login</div>
              <Link to="#" className="forgot">Forgot Password?</Link>
              <div>Don't have an account? <Link to="/">Register here</Link></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
