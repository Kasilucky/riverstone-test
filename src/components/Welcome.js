import React from "react";

const Welcome = (props) => {
  return (
    <div className="container-fluid">
      <div className="col-lg-12 col-md-12 mt-3">
        <div className="container">
          <iframe
            src="https://www.riverstonetech.com/"
            width="100%"
            frameBorder="0"
            style={{border:"0", height:"100vh"}}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
