import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Body from "./Body";
import Footer from "./Footer";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Home;
