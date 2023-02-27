import React from "react";
import UserImg from "../../../assets/images/HTML/demo-user.jpg";

const UserCard = () => {
  return (
    <div className="user-list">
      <small>Few seconds ago</small>
      <img src={UserImg.src} alt="" />
      <div className="chat-list-text">
        <div>
          <strong>Lena </strong>
          <span>Hey How are you</span>
        </div>
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
};
export default UserCard;
