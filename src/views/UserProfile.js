import React, { useState } from "react";
import logoRightImg from "../assets/images/logo-right.jpg";
import dummyImg from "../assets/images/dummy-01.jpg";
import Carousel from 'react-material-ui-carousel'
import 'font-awesome/css/font-awesome.min.css';
import { useRouter } from 'next/router';
import Person4Icon from '@mui/icons-material/Person4';
import MessageIcon from '@mui/icons-material/Message';
import TabComponents from "../components/sections/ProfileComponents/TabComponents";
import { useTranslation } from "react-i18next";

const UserProfile = (props) => {
    const { t } = useTranslation()
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('ABOUT')
    const navigatorHandler = () => {
        router.push('/dashboard')
    }
    const Tabpanel = ({ text }) => {
        return <a onClick={() => setActiveTab(text)}
            class={`nav-link ${activeTab === text ? 'active' : ''}`} id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
            aria-controls="nav-home" aria-selected={`${activeTab === text}`}>{text}</a>
    }
    const CarouselComp = () => {
        return <div class="user-img-parent-div col-lg-7 col-12 px-0">
            <div id="carouselExampleIndicators" class="carousel user-info-slider slide" data-ride="carousel">
                <div class="carousel-inner" id="aniimated-thumbnials">
                    <Carousel
                        animation={'slide'}
                        interval={2000}
                    >
                        <div class="carousel-item active">
                            <img src={dummyImg.src} class="d-block w-100" alt="..." onclick="gallery(this)" />
                        </div>
                        <div class="carousel-item active">
                            <img src={dummyImg.src} class="d-block w-100" alt="..." onclick="gallery(this)" />
                        </div>
                        <div class="carousel-item active">
                            <img src={dummyImg.src} class="d-block w-100" alt="..." onclick="gallery(this)" />
                        </div>
                    </Carousel>
                </div>

            </div>
        </div>
    }
    return (
        <div>
            <div class="header-control h-c-g">
                <i class="fa fa-angle-left gold-icon" aria-hidden="true" onClick={() => router.back()}></i>
                <div style={{ flex: 1 }}>
                    <h5 >{t('userProfile.tresasure')}</h5>
                </div>

                <img src={logoRightImg.src} />
            </div>
            <div class="row m-0 p-0 ">

                <CarouselComp />
                <div class="tab-content profile-body col-lg-5 col-12 px-0" id="nav-tabContent" >
                    {/* <!-- tabs start --> */}
                    <nav class="about-intrest">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <Tabpanel text={t('userProfile.about')} />
                            <Tabpanel text={t('userProfile.interest')} />
                            {/* <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                                aria-controls="nav-home" aria-selected="true"></a>
                            <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                                aria-controls="nav-profile" aria-selected="false"></a> */}
                        </div>
                    </nav>
                    {/* <!-- tabs end  --> */}
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                    >
                        <TabComponents navigatorHandler={navigatorHandler} />
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                    >
                        <TabComponents navigatorHandler={navigatorHandler} />
                    </div>
                </div>

                <div class="sticky-nav">
                    <a href="/search"><i class="fa fa-search " aria-hidden="true"></i></a>
                    <a href="/dashboard"><MessageIcon color="" /></a>
                    <a href="/userProfile"><Person4Icon sx={{ color: '#E2C76E' }} /></a>
                </div>
                <div id="lightbox">
                    <i class="fas fa-times" onclick="close_gallery()"></i>
                    <img src="" alt="" id="gal-img" />
                </div>
            </div>

        </div>
    );
};

export default UserProfile;
