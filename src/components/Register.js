import React from "react";
import { Link } from "react-router-dom";
import { create_User , fetchUserByEmail} from "../api/api";
import Loader from "./global/Loader";
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

const Register = (props) => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cnfPassword: "",
  });

  const [touched, setTouched] = React.useState({
    password: false,
    cnfPassword: false,
  });

  const [loading, setLoading] = React.useState(false);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const onValid = () => {
    const errors = {};
    const password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!password.test(user.password)) {
      errors.password =
        "Minimum 8 characters, contain at least one capital letter, one small letter, one number, one special character";
    }

    if (user.password != user.cnfPassword) {
      errors.cnfPassword = "Password does not match";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  const { errors, isValid } = onValid();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let encryptedPassword = CryptoAES.encrypt(`${user.password}`, '1234').toString();
    let obj = {
      id: null,
      name: user.name,
      email: user.email.toLocaleLowerCase(),
      phone: user.phone,
      isActive: false,
      password: encryptedPassword,
    };
    fetchUserByEmail(obj.email)
      .then((res) => {
        let data = res.data.listUsers.items;
        if (data.length === 0) {
          create_User(obj)
            .then((res) => {
              let data = res.data.createUser;
              alert("Your Registration was successfully completed, Thank you.");
              window.location.replace("/login");
              setLoading(false);
              onClear();
            })
            .catch((err) => {
              alert("Failed to Complete Registration Please try again.");
              setLoading(false);
              console.log("create_User Err::", err);
            });
        } else {
          let email = data.length === 0 ? "" : data[0].email;
          if (email == obj.email) {
            alert("User already exists please goto login");
            setLoading(false);
            onClear();
          } else {
            alert("Something went wrong. please try again");
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("fetchUsers Err::", err);
      });
  };

  const onClear = () => {
    setUser({
      ...user,
      name: "",
      email: "",
      phone: "",
      password: "",
      cnfPassword: "",
    });
    setTouched({
      ...touched,
      password: false,
      cnfPassword: false,
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
                <h3 className="text-center text-info">Sign Up</h3>
                <div className="form-group">
                  <div className="form-lable text-left">
                    <label htmlFor="username" className="text-info text-left">
                      Username:
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="form-control"
                    value={user.name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form-lable text-left">
                    <label htmlFor="username" className="text-info text-left">
                      Email:
                    </label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-control"
                    value={user.email}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form-lable text-left">
                    <label htmlFor="phone" className="text-info text-left">
                      Phone:
                    </label>
                  </div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    required
                    className="form-control"
                    value={user.phone}
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
                    required
                    className="form-control"
                    value={user.password}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {touched.password && errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>
                <div className="form-group">
                  <div className="form-lable text-left">
                    <label htmlFor="cnfPassword" className="text-info">
                      Confirm Password:
                    </label>
                  </div>
                  <input
                    type="password"
                    name="cnfPassword"
                    id="cnfPassword"
                    required
                    className="form-control"
                    value={user.cnfPassword}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {touched.password && errors.cnfPassword && (
                    <span className="error">{errors.cnfPassword}</span>
                  )}
                </div>
                <div id="register-link" className="text-right">
                  <Link to="/login" className="text-info">
                    Already have an account ? Log In
                  </Link>
                </div>
                <br />
                <div className="form-group">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    // disabled={!isValid}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
