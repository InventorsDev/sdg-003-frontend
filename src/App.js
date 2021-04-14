import "./App.css";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SignUpPage} />
          <Route path="/LoginPage" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
