import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/Sign-up";
import Market from "./components/Market";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Market" component={Market} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
