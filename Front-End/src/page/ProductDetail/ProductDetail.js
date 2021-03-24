import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Banner from "../../components/Banner";
import "../../App.css";
import Header from "../../components/Header";
import Acc1 from '../../images/Acc1.jpg';
import Footer from "../../components/Footer";
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
                        <span className="title-acc-view"> Acc</span>
                        #1111
                      </h1>
                      <ul className="sa-ttactul">
                        <li className="sa-ttac-pri">
                          45000
                          <sup>đ</sup>
                        </li>
                        <li className="sa-ttac-btn">
                        <button type="button" className="btn btn-primary btn-muaacc">
                            <span>Mua Acc</span>
                        </button>

                        </li>
                      </ul>
                    </div>
                    <ul className="nav nav-pills mb-3 sa-ttacc-tabs">
                        <li className="nav-item active" >
                          <a className="nav-link active show">
                            Hình ảnh
                          </a>
                        </li>
                    </ul>
                    <div className="tab-content sa-ttacc-tcont" >
                          <div className="tab-pane show active">
                              <ul className="show_info">
                                  <li>
                                    <img alt="img-champ" src={Acc1}/>
                                  </li>
                                  <li>
                                    <img alt="img-champ" src={Acc1}/>
                                  </li><li>
                                    <img alt="img-champ" src={Acc1}/>
                                  </li><li>
                                    <img alt="img-champ" src={Acc1}/>
                                  </li>
                              </ul>
                          </div>
                    </div>
                    <div className="sa-ttmore">
                       <h2 class="sa-ttmoretit" >MUA ACC NÀY</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ProductDetail;
