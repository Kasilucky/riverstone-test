import React from "react";
import Admin from "../components/Admin";
import Layout from "../components/Layout";

const AdminPage = (props) => {
  const user = localStorage.getItem("user");
  React.useLayoutEffect(() => {
    if (user == null || user == undefined) {
      window.location.replace("/login");
    }
  }, []);
  return (
    <Layout title="Admin - Riverstone Infotech">
      {user && JSON.parse(user).email === "riverstone@gmail.com" ? (
        <Admin />
      ) : (
        <>
          <h1>Your not Logged in as Admin.</h1>
        </>
      )}
    </Layout>
  );
};

export default AdminPage;
