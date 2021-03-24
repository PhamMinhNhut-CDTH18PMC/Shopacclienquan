import { Component } from "react";
import Product from "./Product";
class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="container-fluid text-center">
          <div className="content-body">

            <br />
            <br />
            <br />
            <div className="group-content">
              <div className="group-acc">
                <div className="text-center">
                <Product />
                </div>  
              </div>
            </div>
            <div className="page-next">
              <ul className="pagination justify-content-center">
                <a className="nav-link">Trang trước</a>
                <a className="nav-link active">1</a>
                <a className="nav-link">2</a>
                <a className="nav-link">3</a>
                <a className="nav-link">Trang cuối</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
