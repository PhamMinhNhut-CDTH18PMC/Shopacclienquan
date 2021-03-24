import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import "../App.css";
class Pagination  extends Component  {
  render()
  {
    return (
      <div>
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
      );
  };
}

export default Pagination;
