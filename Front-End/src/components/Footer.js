import { Component } from "react";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container-fluid footer-content">
          <div className="row">
            <div className="col-lg-4 footer-location">
              <i className="fas fa-map-marker-alt"> Hồ Chí Minh, Việt Nam</i>
              <br />
              <br />
              <i className="fas fa-mobile-alt"> 1800****</i>
              <br />
              <br />
              <i className="fas fa-envelope"> tùmlumtàla@tàlatùmlum.com</i>
              <br />
              <br />
            </div>
            <div className="col-lg-4 footer-icon">
              <a className="nav-link fab fa-facebook fb" href="#" />
              <a className="nav-link fab fa-youtube yt" href="#" />
              <a className="nav-link fab fa-twitter tw" href="#" />
            </div>
            <div className="col-lg-4 footer-source">
              <p>Copyright @2019</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
