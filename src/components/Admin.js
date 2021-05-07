import React from "react";

const Admin = (props) => {
  return (
    <div className="container-fluid mt-5">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              <a
                href="mailto:some@email.com"
                className="btn btn-link"
              >
                some@email.com
              </a>
            </td>
            <td><a href="tel:01234567890" className="btn btn-link">01234 567 890</a></td>
            <td>
              <label htmlFor="isActive" className="text-info">
                <span>
                  <input id="isActive" className="mr-1" name="isActive" type="checkbox" />
                </span>
                <span classNameName="ml-2">active</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
