import { Component } from "react";
import Product from "./Product";
class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="container-fluid text-center">
          <div className="content-body">
            <div className="buttonn">
              <div className="dropdown btn">
                <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown">Tìm Theo Rank</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" >Rank Đồng</a>
                  <a className="dropdown-item" >Rank Bạc</a>
                  <a className="dropdown-item">Rank Vàng</a>
                  <a className="dropdown-item" >Rank Bạch Kim</a>
                  <a className="dropdown-item">Rank Kim Cương</a>
                  <a className="dropdown-item" >Rank Tinh Anh</a>
                  <a className="dropdown-item" >Rank Cao Thủ</a>
                </div>
              </div>
              <div className="dropdown btn">
                <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                  Tìm Theo Giá Tiền
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" >50k</a>
                  <a className="dropdown-item" >Từ 50k - 70k</a>
                  <a className="dropdown-item" >Từ 70k - 100k</a>
                  <a className="dropdown-item" >Từ 100k - 500k</a>
                  <a className="dropdown-item" >Từ 500k - 1tr</a>
                  <a className="dropdown-item" >Từ 1tr - 1tr2</a>
                </div>
              </div>
              <div className="dropdown btn">
                <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown">Sắp Xếp Theo</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" >Tướng nhiều nhất</a>
                  <a className="dropdown-item" >Trang phục nhiều nhất</a>
                  <a className="dropdown-item" >Giá cao nhất</a>
                  <a className="dropdown-item" >Rank cao nhất</a>
                  <a className="dropdown-item" >Acc mới nhất</a>
                </div>
              </div>
              <button className="btn btn-warning"><b>Quay Lại Mặc Định</b></button>
            </div>
            <br />
            <br />
            <br />

            <Product/>
            <div className="page-next">
              <ul className="pagination justify-content-center">
                <a className="nav-link" >Trang trước</a>
                <a className="nav-link active" >1</a>
                <a className="nav-link">2</a>
                <a className="nav-link" >3</a>
                <a className="nav-link" >Trang cuối</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
