import React, { Component } from "react";
import { connect } from "react-redux";
class GheItem extends Component {
  onSelect = () => {
    this.props.dispatch({
      type: "SET_PRODUCT",
      payload: this.props.gheItem,
    });
  };

  render() {
    const { SoGhe, TenGhe, TrangThai } = this.props.gheItem;
    return (
      <div className="col-3  my-2" key={SoGhe}>
        <button
          className="btn"
          onClick={this.onSelect}
          // style={{ background: { TrangThai: false ? "green" : "grey" } }}
        >
          {TenGhe}
        </button>
      </div>
    );
  }
}

export default connect()(GheItem);
