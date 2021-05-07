import React from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";

const LoginPage = (props) => {
  React.useLayoutEffect(() => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      window.location.replace("/");
    }
  }, []);
  return (
     <Layout title="Sign in - Riverstone Infotech">
         <Login/>
     </Layout>
  );
};

export default LoginPage;
