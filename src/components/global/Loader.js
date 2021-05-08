import React from "react";

const Loader = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:"99999",
        backgroundColor:"rgb(0, 0, 0, 0.25)"
      }}
    >
        <div className="loader"></div>
    </div>
  );
};

export default Loader;
