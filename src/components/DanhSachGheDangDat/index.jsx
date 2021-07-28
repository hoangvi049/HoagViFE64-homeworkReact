import React, { Component } from "react";
import { connect } from "react-redux";
class GheDangDat extends Component {
  setCancel = (item) => {
    return () => {
      const action = {
        type: "SET_CANCEL",
        payload: item,
      };
      this.props.dispatch(action);
    };
  };

  renderList = () => {
    const listHTML = this.props.danhSachGheDangDat.map((item) => {
      return (
        <p>
          Ghế: {item.TenGhe} - {item.Gia}${" "}
          <span>
            <button className="btn-danger" onClick={this.setCancel(item)}>
              Hủy
            </button>
          </span>
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
    danhSachGheDangDat: state.danhSachGhe.reserved,
  };
};
export default connect(mapStateToProps)(GheDangDat);
