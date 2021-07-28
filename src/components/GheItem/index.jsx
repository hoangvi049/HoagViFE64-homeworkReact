import React, { Component } from "react";
import { connect } from "react-redux";
class GheItem extends Component {
  onSelect = (seat) => {
    // this.props.dispatch({
    //   type: "SET_PRODUCT",
    //   payload: this.props.gheItem,
    // });

    return () => {
      const action = {
        type: "SET_PRODUCT",
        payload: seat,
      };
      this.props.dispatch(action);
    };
  };

  render() {
    const { SoGhe, TenGhe, TrangThai } = this.props.gheItem;
    return (
      <div className="col-3  my-2" key={SoGhe}>
        <button
          className="btn-primary"
          onClick={this.onSelect(this.props.gheItem)}
          // style={{ background: { TrangThai: false ? "green" : "grey" } }}
        >
          {TenGhe}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.danhSachGhe.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(GheItem);
