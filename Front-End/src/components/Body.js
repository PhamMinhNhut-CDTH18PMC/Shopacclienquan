import { Component } from "react";
import Pagination from "./pagnigation";
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
                  {/*product*/ }
                <Product />
                </div>  
              </div>
            </div>
            <Pagination/>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
