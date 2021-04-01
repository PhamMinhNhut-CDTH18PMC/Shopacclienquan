import { Component } from "react";
import { Link } from "react-router-dom";
import Sale from "../images/seo.png";
import Star from "../images/star.png";
import "../App.css";

class Product extends Component {
  render() {
    const { products, index } = this.props;
    const linkImage = `http://127.0.0.1:8000/img/${products.imageProduct}`;
    return (
      <div className="acc">
        <div className="cardd text-light card1">
          <div className="header-card">
            <img className="star" src={Star} alt="star" />
            <p>
              Acc #{products.id}
              <img src={Sale} />
              <span className="text-sale" alt="sale">
                <b>-{products.KM}</b>
              </span>
            </p>
          </div>
          <img className="card-img-top" src={linkImage} alt="Acc1" />
          <div className="card-body">
            <del>500.000 VNĐ</del>
            <h5 className="form-check-inline">{products.price} VNĐ</h5>
            <div className="row">
              <div className="col-md-6">
                <p>Tướng: {products.Hero}</p>
                <p>Trang phục: {products.skin}</p>
              </div>
              <div className="col-md-6">
                <p>Vàng: {products.gold}</p>
                <p>Điểm ngọc: {products.gem}</p>
              </div>
            </div>
            <p>{products.rank}</p>

            <div className="btn-groupp">
              <button
                className="btn btn-outline-light btncard"
                onClick={this.handleBuyNow}
              >
                <Link to={`/productdetail/${products.id}`}>XEM ACC</Link>
                {/* XEM ACC */}
              </button>
              <button
                className="btn btn-warning btncard"
                data-toggle="modal"
                data-target="#myModal2"
              >
                MUA NGAY
              </button>
            </div>

            {/**modal */}
            <div className="modal" id="myModal2">
              <div className="modal-dialog">
                <div className="modal-content text-center">
                  <div className="modal-header">
                    <h4 className="modal-title text-dark" id="myModalLabel">
                      <b>THÔNG BÁO</b>
                    </h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>

                  <div className="modal-body">
                    <h3>Bạn muốn mua Acc # {products.id}</h3>
                    <div className="button-group">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Hủy bỏ
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                      >
                        Mua ngay
                      </button>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
