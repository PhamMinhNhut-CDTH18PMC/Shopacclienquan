import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "../../App.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
class History extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="transaction-history">
            <table className="table table-dark table-striped text-warning text-center">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Tài Khoản</th>
                  <th>Mật Khẩu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Phungu123</td>
                  <td>12345789</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
