import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Riverstone Infotech" />
        <title>{props.title ? props.title : "Riverstone Infotech"}</title>
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
