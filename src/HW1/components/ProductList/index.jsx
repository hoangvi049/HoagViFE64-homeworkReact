import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
class ProductList extends Component {
  onChange = (item) => {
    return () => {
      const action = {
        type: "SET_PRODUCT",
        payload: item,
      };
      this.props.dispatch(action);
    };
  };

  render() {
    return (
      <div className="product-list">
        {this.props.productList.map((item) => {
          return (
            <div key={item.id} className="product-item">
              <a className="btn" onClick={this.onChange(item.url)}>
                <img
                  src={item.url}
                  alt=""
                  style={{ width: "100%", margin: "0 auto" }}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.product.productList,
    setProduct: state.product.selectedProduct,
  };
};

export default connect(mapStateToProps)(ProductList);
