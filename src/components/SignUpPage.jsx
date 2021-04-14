import "../SignUp.css"
import FormIntro from "./FormIntro"
import {Link} from "react-router-dom"
import MarketIcon from './Icons/MarketIcon'
import UserIcon from './Icons/UserIcon'

const SignUp = () => {
    return (
      <div className="container">
        <div className="header">
          <div className="company-name">
            <MarketIcon />
            <p>Marketplace</p>
          </div>

          <div className="company-name">
            <UserIcon />
            <Link to="/LoginPage">Login</Link>
          </div>
        </div>

        <div className="body">
          <div className="form-container">
            <FormIntro
              name="Register"
              greet="Welcome, complete the form below"
            />

            <form action="post" className="form-field">
              <div className="row first-row">
                <div className="form-input">
                  <div className="form-title">Title</div>
                  {/* <input type="text" placeholder="Choose" /> */}
                  <select name="" id="">
                    <option value="choose">Choose</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                  </select>
                </div>

                <div className="form-input ">
                  <div className="form-title">First Name</div>
                  <input type="text" placeholder="Enter first name" />
                </div>

                <div className="form-input">
                  <div className="form-title">Last Name</div>
                  <input type="text" placeholder="Enter last name" />
                </div>
              </div>

              <div className="row second-row">
                <div className="form-input">
                  <div className="form-title">Email</div>
                  <input type="email" placeholder="Enter email" />
                </div>

                <div className="form-input">
                  <div className="form-title">Mobile Number</div>
                  <input type="telephone" placeholder="Mobile Number" />
                </div>
              </div>

              <div className="row third-row">
                <div className="form-input">
                  <div className="form-title">Password</div>
                  <input type="password" placeholder="Enter Password" />
                </div>

                <div className="form-input">
                  <div className="form-title">Confirm Password</div>
                  <input type="password" placeholder="Confirm password" />
                </div>
              </div>

              <div className="btn reg-btn">Register</div>

              Already have an account? <Link to="/LoginPage">Login now</Link>
              {/* <Footer hint="Already have an account?" link="Login Now" /> */}
            </form>
          </div>
        </div>
      </div>
    );
}

export default SignUp;