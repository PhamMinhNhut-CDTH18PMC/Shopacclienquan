import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Body from "./components/Body";
import { Component } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import History from "./page/History/History";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cash: [],
    };

  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/product").then((response) => {
      this.setState(
        {
          products: response.data,
        },
        () => {
          console.log("Acc lấy api về nè :", this.state.products);
        }
      );
    });

    axios.get("http://127.0.0.1:8000/api/cash").then((response) => {
      this.setState(
        {
          cash: response.data,
        },
        () => {
          // console.log("Cash mới call api: :", this.state.cash);
        }
      );
    });
  }


  findIndex = (id) =>{
    var{products} = this.state;
    var result=-1;
    products.forEach((products,index)=>{
      if(products.id===id)
      {
        result=index;
      }
    });
    return result;
  }
  render() {
    const { products, cash,handleBuyNow } = this.state;
    return (
      <Router>
        <div>
          <Header />
          <Banner cash={cash} />
          <Route exact path="/history"  component={History}/>
          <Route exact path="/"  component={()=><Body products={products} handleBuyNow={handleBuyNow} />}/>
          {/* <Route exact path="/productdetail/:id" component={({match})=><ProductDetail match={match}/>} /> */}
          <Route exact path="/productdetail/:id" component={ProductDetail} products={products}/>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
