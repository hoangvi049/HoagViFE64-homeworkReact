import React, { Component } from "react";
import { connect } from "react-redux";
class GheDangDat extends Component {
  renderList = () => {
    const listHTML = this.props.danhSachGheDangDat.map((item) => {
      return (
        <p>
          Ghế: {item.TenGhe} - {item.Gia}
        </p>
      );
    });
    return listHTML;
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.danhSachGhe.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(GheDangDat);
