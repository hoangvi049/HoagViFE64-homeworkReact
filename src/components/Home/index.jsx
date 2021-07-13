import React, { Component } from "react";
import DanhSachGhe from "../DanhSachGhe";
import GheDangDat from "../DanhSachGheDangDat";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Đặt vé xe bus hãng Cybersoft</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-center">Tài xế</h3>
              <DanhSachGhe />
            </div>
            <div className="col-md-6">
              <h3 className="text-center">Danh sach ghế đang đặt</h3>
              <GheDangDat />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
