import React from "react";
import { fetchUsers, update_User } from "../api/api";
import Loader from "./global/Loader";
import Switch from "react-switch";

const Admin = (props) => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchAllUsers = () => {
    setLoading(true);
    fetchUsers()
      .then((res) => {
        let allUsers = res.data.listUsers.items;
        setUsers(allUsers);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("fetchUsers Err::", err);
      });
  };

  React.useEffect(() => {
    fetchAllUsers();
  }, []);

  const onUpdateUserStatus = (id, isActive) => {
    let obj = {
      id: id,
      isActive: isActive,
    };
    update_User(obj)
      .then((res) => {
        console.log("update_User successfully...");
      })
      .catch((err) => {
        alert("Failed to Update User Please try again.");
        console.log("failed to update user", err);
      });
  };

  const onActiveUser = (value, item) => {
    let items = users.map((user) =>
      user.id === item.id ? Object.assign(user, { isActive: value }) : user
    );
    setUsers(items);
    onUpdateUserStatus(item.id, value)
  };

  return (
    <>
      {loading && <Loader />}
      <div className="container-fluid mt-5" style={{ minHeight: "400px" }}>
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
            {loading ? (
              <tr>
                <th colSpan="5">No Users Found.</th>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <th colSpan="5">No Users Found.</th>
              </tr>
            ) : (
              <>
                {users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>
                        <a
                          href={`mailto:${item.email}`}
                          className="btn btn-link"
                        >
                          {item.email}
                        </a>
                      </td>
                      <td>
                        <a href={`tel:${item.phone}`} className="btn btn-link">
                          {item.phone}
                        </a>
                      </td>
                      <td>
                        <Switch
                          onChange={(e) => onActiveUser(e, item)}
                          checked={item.isActive}
                        />
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
