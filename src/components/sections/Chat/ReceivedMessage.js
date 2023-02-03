import React from "react";
import UserImg from "../../../assets/images/HTML/demo-user.jpg";
const ReceivedMessage = () => {
  return (
    <div className="msg-left">
      <img src={UserImg.src} alt="" />
      <div className="bubble-2">
        <span className="text-left ">coocouco</span>
        <small className="text-right w-100">02:09</small>
      </div>
    </div>
  );
};

export default ReceivedMessage;
