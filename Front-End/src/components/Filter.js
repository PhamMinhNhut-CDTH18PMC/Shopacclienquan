import "../App.css";
import { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <button className="btn btn-outline-warning">Thử Vận May 5k</button>
          <button className="btn btn-outline-danger">Acc 50k</button>
          <button className="btn btn-outline-secondary">Acc 70k - 100k</button>
          <button className="btn btn-outline-success">Acc 100k - 500k</button>
          <button className="btn btn-outline-primary">Acc 500k - 1tr</button>
          <button className="btn btn-outline-info">Acc 1tr - 1tr2</button>
        </div>
        <br />
        <div className="buttonn">
          <div className="dropdown btn">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-toggle="dropdown"
            >
              Tìm Theo Rank
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item">Rank Đồng</a>
              <a className="dropdown-item">Rank Bạc</a>
              <a className="dropdown-item">Rank Vàng</a>
              <a className="dropdown-item">Rank Bạch Kim</a>
              <a className="dropdown-item">Rank Kim Cương</a>
              <a className="dropdown-item">Rank Tinh Anh</a>
              <a className="dropdown-item">Rank Cao Thủ</a>
            </div>
          </div>
          <div className="dropdown btn">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-toggle="dropdown"
            >
              Tìm Theo Giá Tiền
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item">50k</a>
              <a className="dropdown-item">Từ 50k - 70k</a>
              <a className="dropdown-item">Từ 70k - 100k</a>
              <a className="dropdown-item">Từ 100k - 500k</a>
              <a className="dropdown-item">Từ 500k - 1tr</a>
              <a className="dropdown-item">Từ 1tr - 1tr2</a>
            </div>
          </div>
          <div className="dropdown btn">
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-toggle="dropdown"
            >
              Sắp Xếp Theo
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item">Tướng nhiều nhất</a>
              <a className="dropdown-item">Trang phục nhiều nhất</a>
              <a className="dropdown-item">Giá cao nhất</a>
              <a className="dropdown-item">Rank cao nhất</a>
              <a className="dropdown-item">Acc mới nhất</a>
            </div>
          </div>
          <button className="btn btn-warning">
            <b>Quay Lại Mặc Định</b>
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
