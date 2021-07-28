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
    const item = this.props.gheItem;
    return (
      <div className="col-3  my-2" key={item.SoGhe}>
        <button
          className={
            this.props.reserved.indexOf(item) > -1
              ? "btn-success"
              : "btn-primary"
          }
          onClick={this.onSelect(this.props.gheItem)}
          // style={{ background: { TrangThai: false ? "green" : "grey" } }}
        >
          {item.TenGhe}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reserved: state.danhSachGhe.reserved,
    available: state.danhSachGhe.available,
  };
};

export default connect(mapStateToProps)(GheItem);
