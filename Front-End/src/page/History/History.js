import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "../../App.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
class History extends Component {
  render() {
    return (
      <div>
        <Header />
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
                  <td>phucoccho123</td>
                  <td>********</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>canhdepzai</td>
                  <td>********</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>nhanxaolol112</td>
                  <td>********</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>nhutxaolol113</td>
                  <td>********</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default History;
