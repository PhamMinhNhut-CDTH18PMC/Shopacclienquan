import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Banner from "../../components/Banner";
import "../../App.css";
import Header from "../../components/Header";
class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="sa-mainsa">
          <div className="container">
            <div className="sa-lprod">
              <div className="sa-lpmain">
                <div className="sa-lsnmain clearfix ">
                  <div className="sa-ttacc">
                    <div className="sa-ttactit clearfix">
                      <h1 className="sa-ttacc-tit">
                        <span className="title-acc-view">Mua Acc</span>
                        #1111
                      </h1>
                      <ul className="sa-ttactul">
                        <li className="sa-ttac-pri">
                          45000
                          <sup>đ</sup>
                        </li>
                      </ul>
                    </div>
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

export default ProductDetail;
