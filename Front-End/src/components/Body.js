import { Component } from "react";
import Pagination from "./pagnigation";
import Product from "./Product";
class Body extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    const {products}=this.props;
    const   elementProduct=products.map((products,index)=>{
      return <Product key={products.id} index={index} products={products} />
    })
    // console.log('ngu :',products);
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
                {/* <Product products={products} /> */}
                {elementProduct}
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
