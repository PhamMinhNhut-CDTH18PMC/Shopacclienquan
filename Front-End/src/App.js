import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Body from './components/Body';
import { Component } from "react";
import axios from 'axios';
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
      console.log('cash ne :',this.state.cash);
  }

  componentDidMount()
  {
    axios.
    get("http://127.0.0.1:8000/api/cash")
    .then((response)=>{
      this.setState({
          cash:response.data,
      },()=>{
        console.log('Cash new :',this.state.cash);

      });
    })
  }
  
  render()
  {
    return (
      <div>
          <Header/>
          <Banner/>
          <Body/>
      </div>    
      );
  };
}

export default App;
