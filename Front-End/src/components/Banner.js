import { Component } from "react";
import "react-slideshow-image/dist/styles.css";
import run from "../images/run.gif";
import plane from "../images/tructhang.gif";
import wow from "../images/wow.gif";
import Filter from "./Filter";
class Banner extends Component {
 
  render() {
    const {cash}=this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="table table-striped text-warning table-recharge">
                <div className="thead">
                  <h6 className="thead-content">NẠP THẺ</h6>
                </div>
                <div className="form-group">
                  <select
                    className="form-control bg-dark text-warning"
                    id="loaithe"
                    name="loaithe"
                    name
                  >
                    <option>Chọn loại thẻ</option>
                    <option value="Viettel">Viettel</option>
                    <option value="Mobiphone">Mobiphone</option>
                    <option value="Vinaphone">Vinaphone</option>
                    <option value="Gate">Gate</option>
                    <option value="Vietnammobile">Vietnammobile</option>
                    <option value="Megacard">Megacard</option>
                    <option value="OnCash">OnCash</option>
                  </select>
                  <br />
                  <select
                    className="form-control bg-dark text-warning"
                    id="loaithe"
                    name="loaithe"
                  >
                    <option>Chọn mệnh giá</option>
                    <option value={20000}>20.000</option>
                    <option value={50000}>50.000</option>
                    <option value={100000}>100.000</option>
                    <option value={200000}>200.000</option>
                    <option value={500000}>500.000</option>
                  </select>
                  <br />
                  <input
                    type="text"
                    className="form-control bg-dark text-warning"
                    id="mathe"
                    name="mathe"
                    placeholder="Nhập mã thẻ"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control bg-dark text-warning"
                    id="sr"
                    name="serial"
                    placeholder="Nhập Serial"
                  />
                  <br />

                  <button className="btn btn-block btn-warning">NẠP THẺ</button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {/* <iframe src="https://www.youtube.com/watch?v=RdekIr2iJD0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
              <iframe
                src="https://www.youtube.com/embed/RdekIr2iJD0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="container-fluid">
            <marquee className="chuchay1" direction="right">
              <span className="Sale">
                <b>
                  GIẢM GIÁ 30% CHO TẤT CẢ CÁC TÀI KHOẢN TỪ 25/1/2021 -&gt;
                  25/2/2021
                </b>
                <sup>
                  <img width={40} height={40} src={wow} longdesc={36} />
                </sup>
              </span>
              <img width={106} height={50} src={plane} longdesc={36} />
            </marquee>
            <br />
            <br />
            <marquee className="chuchay2">
              <div>
                <img width={36} height={36} src={run} longdesc={36} />
                Hãy chơi liên quân mobile vì liên quân rất tốt cho sức khỏe mọi
                người nha!!!!!!!!!!!!!
              </div>
            </marquee>
            <Filter />
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
