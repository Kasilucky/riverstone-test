import React from "react";
import { Link } from "react-router-dom";
import { fetchUserByEmail } from "../api/api";
import Loader from "./global/Loader";
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const getUserByEmail = (email) => {
    setLoading(true);
    fetchUserByEmail(email)
      .then((res) => {
        let data = res.data.listUsers.items;
        let password = data.length === 0 ? "" : CryptoAES.decrypt(data[0].password, '1234');
        let decryptedPassword = password.toString(CryptoENC);
        let isActive = data.length == 0 ? false : data[0].isActive;
        if (data.length === 0) {
          alert("No user found.");
          setLoading(false);
        } else {
          if (decryptedPassword == user.password && isActive) {
            localStorage.setItem("user", JSON.stringify(data[0]));
            // window.location.replace("/welcome");
            history.push("/welcome");
            setLoading(false);
          } else if (decryptedPassword != user.password) {
            alert("Entered Incorrect Password Please Try again.");
            setLoading(false);
          } else {
            setLoading(false);
            alert(
              "Sorry! Your not activated at by Admin please contact info@riverstonetech.com"
            );
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("getUserByEmail Err:::", err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      user.email === "riverstone@gmail.com" &&
      user.password === "Admin@123"
    ) {
      // window.location.replace("/admin");
      history.push("/admin");
      localStorage.setItem("user", JSON.stringify(user));
      onClear();
      setLoading(true);
    } else {
      getUserByEmail(user.email);
    }
  };

  const onClear = () => {
    setUser({
      ...user,
      email: "",
      password: "",
    });
  };

  return (
    <div id="login">
      {loading && <Loader />}
      <h3 className="text-center text-white pt-5"></h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" onSubmit={onSubmit}>
                <h3 className="text-center text-info">Sign In</h3>
                <div className="form-group">
                  <div className="form-lable text-left">
                    <label htmlFor="email" className="text-info text-left">
                      Email:
                    </label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={user.email}
                    required
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form-lable text-left">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    required
                    value={user.password}
                    onChange={onChange}
                  />
                </div>
                <div id="register-link" className="text-right">
                  <Link to="#" className="text-info">
                    Forgot your Password ?
                  </Link>
                </div>
                <br />
                <div className="form-group">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                  >
                    Submit
                  </button>
                </div>
                <div id="register-link" className="text-center">
                  <Link to="/register" className="text-info">
                    Don't have an account ? Create
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
