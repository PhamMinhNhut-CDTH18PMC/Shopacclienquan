import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "../../App.css";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
   this.state={
     products:[],
   }
   console.log('id:', this.props.match.params.id);
  }
  componentDidMount()
  {
    axios.get(`http://127.0.0.1:8000/api/product/${this.props.match.params.id}`).then((response)=>{
      this.setState({
        products:response.data
      },()=>{
        console.log('lay api productdetails :',this.state.products);
      })
    });
  }
  render() {
    const {products}=this.state
    const linkImage=`http://127.0.0.1:8000/img/${products.imageProduct}`;
    return (
      <div>
        <div className="sa-mainsa">
          <div className="container">
            <div className="sa-lprod">
              <div className="sa-lpmain">
                <div className="sa-lsnmain clearfix ">
                  <div className="sa-ttacc">
                    <div className="sa-ttactit clearfix">
                      <h1 className="sa-ttacc-tit">
                        <span className="title-acc-view"> Acc</span>
                        #{this.state.products.id}
                      </h1>
                      <ul className="sa-ttactul">
                        <li className="sa-ttac-pri">
                          {this.state.products.price}
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
                                    <img alt="img-champ" src={linkImage}/>
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
      </div>
    );
  }
}

export default ProductDetail;
