import axios from "axios";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import run from "../images/run.gif";
import plane from "../images/tructhang.gif";
import wow from "../images/wow.gif";
import Filter from "./Filter";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Banner() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState({
    type_card: "",
    denominations: "",
    ID_card: "",
    seri: "",
    accounts_id: 1,
  });
  onchange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    setCash({
      ...cash,
      [name]: value,
    });
  };
  onsubmit = () => {
    const newData = cash;
    axios.post("http://127.0.0.1:8000/api/paid_card", newData);
    if (newData) {
      console.log("Nạp thẻ thành công");
      setOpen(true);

    }
    
  };


  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="table table-striped text-warning table-recharge">
              <div className="thead">
                <h6 className="thead-content">NẠP THẺ</h6>
              </div>
              <div className="form-group">
                <select
                  onChange={onchange}
                  value={cash.type_card}
                  className="form-control bg-dark text-warning"
                  id="loaithe"
                  name="type_card"
                >
                  <option>Chọn loại thẻ</option>
                  <option value="Viettel">Viettel</option>
                  <option value="Mobiphone">Mobiphone</option>
                  <option value="Vinaphone">Vinaphone</option>
                  <option value="Gate">Gate</option>
                  <option value="Vietnammobile">Vietnammobile</option>
                  <option value="Megacard">Megacard</option>
                  <option value="OnCash">OnCash</option>
                </select>
                <br />
                <select
                  value={cash.denominations}
                  onChange={onchange}
                  className="form-control bg-dark text-warning"
                  id="loaithe"
                  name="denominations"
                >
                  <option>Chọn mệnh giá</option>
                  <option value={20000}>20.000</option>
                  <option value={50000}>50.000</option>
                  <option value={100000}>100.000</option>
                  <option value={200000}>200.000</option>
                  <option value={500000}>500.000</option>
                </select>
                <br />
                <input
                  onChange={onchange}
                  value={cash.ID_card}
                  type="text"
                  className="form-control bg-dark text-warning"
                  id="mathe"
                  name="ID_card"
                  placeholder="Nhập mã thẻ"
                />
                <br />
                <input
                  onChange={onchange}
                  value={cash.seri}
                  type="text"
                  className="form-control bg-dark text-warning"
                  id="sr"
                  name="seri"
                  placeholder="Nhập Serial"
                />
                <br />
                <button
                  className="btn btn-block btn-warning"
                  type="submit"
                  onClick={onsubmit}
                  // onClick={handleClick}
                >
                  NẠP THẺ
                </button>
                <Snackbar
                  open={open}
                  autoHideDuration={900}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Nạp Thẻ thành công
                  </Alert>
                </Snackbar>
                {/* {cash === null ? (
                  <Alert severity="error">This is an error message!</Alert>
                ) : (
                  <Snackbar
                    open={open}
                    autoHideDuration={1000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Nạp Thẻ thành công
                    </Alert>
                  </Snackbar>
                )} */}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            {/* <iframe src="https://www.youtube.com/watch?v=RdekIr2iJD0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
            <iframe src="https://www.youtube.com/embed/RdekIr2iJD0"></iframe>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="container-fluid">
          <marquee className="chuchay1" direction="right">
            <span className="Sale">
              <b>
                GIẢM GIÁ 30% CHO TẤT CẢ CÁC TÀI KHOẢN TỪ 25/1/2021 -&gt;
                25/2/2021
              </b>
              <sup>
                <img width={40} height={40} src={wow} longdesc={36} />
              </sup>
            </span>
            <img width={106} height={50} src={plane} longdesc={36} />
          </marquee>
          <br />
          <br />
          <marquee className="chuchay2">
            <div>
              <img width={36} height={36} src={run} longdesc={36} />
              Hãy chơi liên quân mobile vì liên quân rất tốt cho sức khỏe mọi
              người nha!!!!!!!!!!!!!
            </div>
          </marquee>
          <Filter />
        </div>
      </div>
    </div>
  );
}
