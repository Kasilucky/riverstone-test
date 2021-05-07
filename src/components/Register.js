import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {

    const [user, setUser] = React.useState({
        name:"",
        email: "",
        phone:"",
        password: "",
        cnfPassword:""
      });
    
      const onChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };

      const onSubmit = (e) => {
        e.preventDefault();
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
                  />
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
                  />
                </div>
                <div id="register-link" className="text-right">
                  <Link to="/login" className="text-info">
                    Already have an account ? Log In
                  </Link>
                </div>
                <br/>
                <div className="form-group">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    onClick={onSubmit}
                  >Submit</button>
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
