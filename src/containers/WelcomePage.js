import React from "react";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";

const WelcomePage = (props) => {

  React.useLayoutEffect(() => {
    let user = localStorage.getItem("user");
    if (user == null && user == undefined) {
      window.location.replace("/login");
    }
  }, []);

  return (
    <Layout title="Welcome - Riverstone Infotech">
      <Welcome />
    </Layout>
  );
};

export default WelcomePage;
