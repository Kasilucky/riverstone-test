import React from "react";

const Footer = (props) => {
  return (
    <div className="card text-center footer">
      <div className="card-header">Riverstone Infotech</div>
      <div className="card-body">
        <a href="https://www.riverstonetech.com/" target="_blank" rel="noreferrer" className="btn btn-primary">
          Go
        </a>
      </div>
      <div className="card-footer text-muted">© 2001-2020</div>
    </div>
  );
};

export default Footer;
