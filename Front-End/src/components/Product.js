import { Component } from "react";
import Acc1 from "../images/Acc1.jpg";
import Star from "../images/star.png";
import Sale from "../images/seo.png";
class Product extends Component {
  render() {
    return (
      <div className="acc">
      <div id="slide1" className="panel">
        <div className="row">
          <div className="col-md-6">
            <p>Tướng: 24</p>
            <p>Trang phục: 17</p>
          </div>
          <div className="col-md-6">
            <p>Vàng: 190</p>
            <p>Điểm ngọc: 90</p>
          </div>
        </div>
        <p>Cao Thủ</p>
      </div>
      <div className="cardd text-light card1">
        <div className="header-card">
          <img className="star" src={Star} alt="star"/>
          <p>
            Acc #1
            <img src={Sale} />
            <span className="text-sale" alt="sale">
              <b>-50%</b>
            </span>
          </p>
        </div>
        <img className="card-img-top" src={Acc1} alt="Acc1"/>
        <div className="card-body">
          <del>500.000 VNĐ</del>
          <h5 className="form-check-inline">250.000 VNĐ</h5>
          <div className="row">
            <div className="col-md-6">
              <p>Tướng: 24</p>
              <p>Trang phục: 17</p>
            </div>
            <div className="col-md-6">
              <p>Vàng: 190</p>
              <p>Điểm ngọc: 90</p>
            </div>
          </div>
          <p>Cao Thủ</p>
          <div className="btn-groupp">
            <button className="btn btn-outline-light btncard">
              XEM ACC
            </button>
            <button className="btn btn-warning btncard">
              MUA NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Product;
