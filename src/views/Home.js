import React, { useEffect, useState } from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import { useTranslation } from "react-i18next";
import { Avatar, Button } from "@material-ui/core";
import Image from "../components/elements/Image";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero className="illustration-section-01" />
      <div className={isScrolled ? "btn-wrapper scrolled" : "btn-wrapper"}>
        <Button
          size="large"
          type="submit"
          variant="outlined"
          color="white"
          style={{
            position: "fixed",
            top: "580px",
            left: "38px",
            zIndex: 1,
            padding: "0",
          }}
          href="https://play.google.com/store/apps/details?id=com.i69.isyxtinine&pli=1"
          target="_blank"
        >
          <Image
                  src={'../images/dark.png'}
                  className="dark"
                  alt="Google Badge"
                  />
                   <Image
                   className="white"
                  src={'../images/white.png'}
                  alt="Google Badge"
                 />
          
        </Button>
      </div>
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
