import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Body from './components/Body';
import { Component } from "react";
import axios from 'axios';
import Footer from './components/Footer';
import ProductDetail from './page/ProductDetail/ProductDetail';
class App  extends Component  {
  constructor(props)
  {
      super(props);
      this.state={
        cash:{
          seri:'',
          ID_card:'',
          denominations:'',
          accounts_id:''
        }
      }
      console.log('cash nè :',this.state.cash);
  }

  componentDidMount()
  {
    axios.
    get("http://127.0.0.1:8000/api/cash")
    .then((response)=>{
      this.setState({
          cash:response.data,
      },()=>{
        console.log('Cash mới nè :',this.state.cash);

      });
    })
  }
  
  render()
  {
    return (
      <div>
          {/* <Header/>
          <Banner/>
          <Body/>
          <Footer/> */}
          <ProductDetail/>
      </div>    
      );
  };
}

export default App;
