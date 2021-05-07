import React from "react";
import Layout from "../components/Layout";
import Register from "../components/Register";

const RegisterPage = (props) => {
  React.useLayoutEffect(() => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      window.location.replace("/");
    }
  }, []);
  return (
    <Layout title="Sign up - Riverstone Infotech">
      <Register />
    </Layout>
  );
};

export default RegisterPage;
