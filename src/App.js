import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/Sign-up";
import Market from "./components/Market";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product1 from "./components/products/Product1";
import Product2 from "./components/products/Product2";
import Product3 from "./components/products/Product3";
import Product4 from "./components/products/Product4";
import HelpPage from "./components/HelpPage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./components/products/Product";


const App = () => {
  const [products, setProducts] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [oil, setOil] = useState([]);
  const [rice, setRice] = useState([]);
  const [palmoil, setPalmoil] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://agrico-market.000webhostapp.com/api/products`
      );

      const fruitData = await axios(
        `https://agrico-market.000webhostapp.com/api/product/1`
      );

      const getGroundnutoil = await axios(
        `https://agrico-market.000webhostapp.com/api/product/5`
      );

      const getRice = await axios(
        `https://agrico-market.000webhostapp.com/api/product/4`
      );

      const getPalmoil = await axios(
        `https://agrico-market.000webhostapp.com/api/product/2`
      );

      console.log(getRice.data.data);

      const realData = result.data.data;
      console.log(realData);

      const fruitItems = fruitData.data.data;

      const groundnutoil = getGroundnutoil.data.data;

      const rice = getRice.data.data;

      const oils = getPalmoil.data.data;

      console.log("oil:", oils);

      setProducts(realData);
      setFruits(fruitItems);
      setOil(groundnutoil);
      setRice(rice);
      setPalmoil(oils);
      setLoading(false);
    };

    fetchItems();
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />

          <Route path="/Market">
            <Market loading={loading} products={products} />
          </Route>

          <Route path="/Cart" component={Cart} />

          <Route path="/Product1">
            <Product1 loading={loading} fruits={fruits} />
          </Route>

          <Route path="/Product2">
            <Product2 groundnutoil={oil} loading={loading} />
          </Route>

          <Route path="/Product3">
            <Product3 loading={loading} rice={rice} />
          </Route>

          <Route path="/Product4">
            <Product4 loading={loading} oils={palmoil} />
          </Route>

          <Route path="/helppage">
            <HelpPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
