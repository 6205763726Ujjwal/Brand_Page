import React from "react";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mailList">
      <div className="mailListItem">
        <h1>Save time, save money!</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="inpputField">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
