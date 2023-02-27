import React from "react";

const SendMessage = ({ text = "Hey", time = "02:09" }) => {
  return (
    <div className="msg-right">
      <div className="bubble-1">
        <span className="text-left ">{text}</span>
        <small className="text-right w-100">{time}</small>
      </div>
    </div>
  );
};

export default SendMessage;
