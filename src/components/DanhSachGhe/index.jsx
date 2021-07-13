import React, { Component } from "react";
import GheItem from "../GheItem";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.danhSachGhe.map((item) => {
            return <GheItem gheItem={item} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.danhSachGhe.danhSachGhe,
  };
};

export default connect(mapStateToProps)(DanhSachGhe);
