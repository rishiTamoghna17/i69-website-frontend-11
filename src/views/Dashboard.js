import React from "react";
import UserImg from "../assets/images/HTML/demo-user.jpg";
import coinImg from "../assets/images/HTML/coin.PNG";
import UserCard from "../components/sections/Chat/UserCard";
import SendMessage from "../components/sections/Chat/SendMessage";
import ReceivedMessage from "../components/sections/Chat/ReceivedMessage";
import 'font-awesome/css/font-awesome.min.css';
import Person4Icon from '@mui/icons-material/Person4';
import MessageIcon from '@mui/icons-material/Message';
import { useTranslation } from "react-i18next";
const Dashboard = (props) => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="row m-0">
        <div className="col-4 user-list-parent px-0">
          <div className="chat-headers msg-header">{t('dashboard.message')}</div>
          <div className="scr-msg">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>

        <div className="col-8 chat-area px-0">
          <div className="chat-headers">{t('dashboard.helene')}</div>
          <div className="scr-cht">
            <div className="coin-area">
              <img src={coinImg.src} alt="" />
              <span>432</span>
              <small className="pb-1">{t('dashboard.coinsLeft')}</small>
            </div>

            <SendMessage />

            <ReceivedMessage />

            <div className="chat-time">5 March 2021</div>

            <SendMessage text="how are you" />

            <ReceivedMessage />

            <SendMessage text="coocouco" />
            <SendMessage />
            <ReceivedMessage />
            <SendMessage text="how are you" />
            <div className="chat-send-area">
              <i className="fa fa-paperclip" aria-hidden="true"></i>
              <div className="send">
                <input type="text" placeholder={t('dashboard.enterMesssage')} />
                <i className="fas fa-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-nav">
        <a href="/search"><i class="fa fa-search" aria-hidden="true"></i></a>
        <a href="/dashboard"><MessageIcon sx={{ color: '#E2C76E' }} /></a>
        <a href="/userProfile"><Person4Icon /></a>
      </div>
    </div>
  );
};

export default Dashboard;
