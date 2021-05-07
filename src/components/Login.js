import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(user))
    if (
      user.email === "riverstone@gmail.com" &&
      user.password === "Admin@123"
    ) {
      window.location.href = "/admin";
    } else {
      console.log(user);
    }
  };

  return (
    <div id="login">
      <h3 className="text-center text-white pt-5"></h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form">
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
                    onClick={onSubmit}
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
