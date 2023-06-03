import React from "react";
import demoUser from "../../../assets/images/demo-user.jpg";
const ProfileComponents = ({ text = "Hey", time = "02:09" }) => {
    return (
        <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
            <img src={demoUser.src} alt="" />
            <span>Ammanda , 28</span>
        </div>
    );
};

export default ProfileComponents;
    