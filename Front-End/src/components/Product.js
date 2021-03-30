import { Component } from "react";
import { Link } from "react-router-dom";
import Acc1 from "../images/Acc1.jpg";
import Sale from "../images/seo.png";
import Star from "../images/star.png";
import "../App.css";
class Product extends Component {
  handleBuyNow=()=>
  {
    console.log(this.props.products);
  }
  render() {
    const { products, index } = this.props;
    const linkImage=`http://127.0.0.1:8000/img/${products.imageProduct}`;
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
              <button className="btn btn-outline-light btncard"  onClick={this.handleBuyNow} >
                <Link to={`/productdetail/${products.id}`}>XEM ACC</Link>
                {/* XEM ACC */}
              </button>
              <button className="btn btn-warning btncard">MUA NGAY</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
