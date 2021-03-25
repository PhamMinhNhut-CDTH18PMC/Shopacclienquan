import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Body from './components/Body';
import { Component } from "react";
import axios from 'axios';
import Footer from './components/Footer';
import ProductDetail from './page/ProductDetail/ProductDetail';
import History from './page/History/History';
class App  extends Component  {
  constructor(props)
  {
      super(props);
      this.state={
        products:[],
        cash:{
            type_card:'',
            denominations:'',
            ID_card:'',
            seri:'',
            accounts_id:1,
          }
      }
      // console.log('Thông tin acc ban đầu nè :',this.state.cash);
  }

  componentDidMount()
  {
    axios.
    get("http://127.0.0.1:8000/api/product")
    .then((response)=>{
      this.setState({
        products:response.data,
      },()=>{
        console.log('Acc lấy api về nè :',this.state.products);
      });
    })

    axios.
    get("http://127.0.0.1:8000/api/cash")
    .then((response)=>{
      this.setState({
        cash:response.data,
      },()=>{
        console.log('Cash mới call api: :',this.state.cash);
      });
    })
  }
  render()
  {
    const {products,cash}=this.state;
    return (
      <div>
          <Header/>
          <Banner cash={cash}/> 
          <Body products={products}/>
          <Footer/>
          {/* <History/> */}
           {/* <ProductDetail/>  */}
      </div>    
      );
  };
}

export default App;
