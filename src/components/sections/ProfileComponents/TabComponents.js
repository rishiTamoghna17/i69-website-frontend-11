import React from "react";
const TabComponents = ({ navigatorHandler }) => {
    return (
        <div class="about-tab">
            <h3>Treasure, 18</h3>
            <p>Top Modal </p>
            <p>Modal</p>
            <button class="mt-3 global-btn-2" onClick={navigatorHandler}><i class="fas fa-comment-dots" aria-hidden="true"></i> <span>SEND A MESSAGE</span> </button>
            <div class="user-info-text mt-4">
                <span class="gold-color font-weight-bold">About</span>
                <p>{"I'm an English modal, singel, and actress :)"}</p>
                <div class="user-badge mt-3 ">
                    <button class="global-btn-3">American Beauty</button>
                    <button class="global-btn-3">Actress</button>
                    <button class="global-btn-3">69 Lover</button>
                </div>
                <span class="gold-color font-weight-bold mt-3">Political Views</span>
                <p>Conservative</p>
                <span class="gold-color font-weight-bold mt-3">Ethnicity</span>
                <p>White</p>
            </div>
        </div>
    );
};

export default TabComponents;
