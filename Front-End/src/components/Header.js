import "../App.css";
import logo from "../images/logo.png";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import History from "../page/History/History";
class Header extends Component {
  render() {
    return (
        <div className="header">
          {/* MENU */}
          <nav className="navbar navbar-expand-md bg-darkk fixed-top">
            <div className="container">
              <a className="navbar-brand">
                <img src={logo} alt="logo" className="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <i className="fas fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-center Menu"
                id="collapsibleNavbar"
              >
                <ul className="navbar-nav menu">
                  <li className="nav-item">
                    <a className="nav-link">
                      <b>GIỚI THIỆU</b>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbardrop"
                      data-toggle="dropdown"
                    >
                      <b>TIN TỨC</b>
                    </a>
                    <div className="dropdown-menu bg-warning">
                      <a className="dropdown-item">BẢNG CẬP NHẬT MÙA 10</a>
                      <a className="dropdown-item">THÔNG TIN BẢNG NGỌC</a>
                      <a className="dropdown-item">CẬP NHẬT RANK</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <b>ĐIỀU KHOẢN</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link">
                      <b>LỊCH SỬ GIAO DỊCH</b>
                    </a> */}
                     <Link to="/history" className="nav-link" >LỊCH SỬ GIAO DỊCH</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <b>NẠP THẺ</b>
                    </a>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="btn btn-outline-warning justify-content-end"
                data-toggle="modal"
                data-target="#myModal"
              >
                <i className="fas fa-sign-in-alt" />
                ĐĂNG NHẬP
              </button>
            </div>
          </nav>
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content text-center">
                <div className="modal-header">
                  <h4 className="modal-title text-dark" id="myModalLabel">
                    <b>ĐĂNG NHẬP</b>
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
                  <button type="button" className="btn btn-outline-primary">
                    <i className="fab fa-facebook" />
                    ĐĂNG NHẬP BẰNG FACEBOOK
                  </button>
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
          <div className="modal fade" id="myModal1" role="dialog">
            <div className="modal-dialog">
              {/* Modal content*/}
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{ backgroundColor: "#1c2b45" }}
                >
                  <p style={{ color: "white" }}>Thông Báo</p>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Xin Chào Các Gamer</p>
                  <p>
                    - Shop đã được các kênh youtube nổi tiếng triệu sub quảng
                    cáo và đảm bảo uy tín như: Lâm Vlog, Trải Nghiệm Game, NHN
                    GAMING, Thánh lồng tiếng...
                  </p>
                  <p>
                    - 100% acc LIÊN QUÂN, RANDOM 50K, 100k, 200k, 250K, 300K
                    trên shop là TRẮNG THÔNG TIN và có thể thay đổi mật khẩu
                    <a href="index/index(1).html">Tại đây</a>
                  </p>
                  <p>
                    - Do hệ thống game thường xuyên reset mùa giải nên rank có
                    thay đổi, vui lòng check cẩn thận trước khi mua.
                  </p>
                  <p>- SDT ADMIN: đéo có</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    style={{ border: "1px solid cyan" }}
                  >
                    Đã hiểu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
