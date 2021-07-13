import React, { Component } from "react";
import "./style.css";
import Model from "../Model";
import ProductList from "../ProductList";

class Home extends Component {
  render() {
    return (
      <div
        className="home"
        style={{
          backgroundImage: `url(./img/background.jpg)`,
        }}
      >
        <h1>TRY GLASSES APP ONLINE</h1>
        <Model />
        <ProductList />
      </div>
    );
  }
}

export default Home;
