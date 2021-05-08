import React from "react";
import Admin from "../components/Admin";
import Layout from "../components/Layout";

const AdminPage = (props) => {
  React.useLayoutEffect(() => {
    let user = localStorage.getItem("user");
    if (user == null && user == undefined) {
      window.location.replace("/login");
    }
  }, []);
  return (
    <Layout title="Admin - Riverstone Infotech">
      <Admin />
    </Layout>
  );
};

export default AdminPage;
