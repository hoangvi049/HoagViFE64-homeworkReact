import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";

class Model extends Component {
  render() {
    return (
      <div className="model container">
        <img src="./img/model.jpg" className="model-img" alt="" />
        <div className="glass-selected">
          <img src={this.props.selectedProduct.glass} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
  };
};
export default connect(mapStateToProps)(Model);
