import React, { Component } from "react";
import Products from "./section/Products";
import Header from "./header/CartHeader";
import Details from "./section/Details";
import { Route } from "react-router-dom";

class Section extends Component {
  render() {
    return (
      <Section>
        <Header />
        {/* <Route path="/products" component={Products} exact /> */}
        <Route path="/products/:id" component={Details} />
        

        {/* <Products /> */}
      </Section>
    );
  }
}

export default Section;
