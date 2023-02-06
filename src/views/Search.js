import React, { useState } from "react";
import logoRightImg from "../assets/images/logo-right.jpg";
import 'font-awesome/css/font-awesome.min.css';
import { useRouter } from 'next/router';
import Person4Icon from '@mui/icons-material/Person4';
import MessageIcon from '@mui/icons-material/Message';
import ProfileComponents from "../components/sections/ProfileComponents";
import ChatDescription from "../components/sections/ProfileComponents/ChatDescription";
import { useTranslation } from "react-i18next";
const Search = (props) => {
    const { t } = useTranslation()
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('RANDOM')
    const ListItem = ({ text }) => {
        return <li class="nav-item" role="presentation" onClick={() => setActiveTab(text)}>
            <a class={`nav-link ${activeTab === text ? 'active' : ''}`} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                aria-selected={`${activeTab === text}`}>{text}</a>
        </li>
    }
    const Panel = () => {
        return <div class="row m-0">
            <div class="  pt-4 col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="search-card">
                    <div class="search-card-img">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <ChatDescription />
                </div>
            </div>
            <ProfileComponents />
            <ProfileComponents />
            <ProfileComponents />
            <ProfileComponents />
        </div>
    }
    return (
        <div>
            {/* <!-- header area --> */}
            <div class="header-control header-gold">
                <i class="fa fa-angle-left " aria-hidden="true" onClick={() => router.back()}></i>
                <h5>{t('search.searchResult')}</h5>
                <img src={logoRightImg.src} />
            </div>
            <ul class="nav nav-tabs search-tab" id="myTab" role="tablist">
                <ListItem text={t('search.random')} />
                <ListItem text={t('search.popular')} />
                <ListItem text={t('search.mostActive')} />
            </ul>
            <div class="tab-content user-search-area" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <Panel />
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Panel />
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <Panel />
                </div>
            </div>
            <div class="sticky-nav">
                <a href="/search"><i class="fa fa-search active" aria-hidden="true"></i></a>
                <a href="/dashboard"><MessageIcon /></a>
                <a href="/userProfile"><Person4Icon /></a>
            </div>
        </div>
    );
};

export default Search;
