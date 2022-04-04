import React from "react";
import "./Hero.scss";
import hand from "../../images/hand.webp";
import play from "../../images/play.svg";

const Hero = () => {
  return (
    <>
      <section className="banner" id="banner">
        <div id="bannerBgAddition" className="banner-addition-bg"></div>
        <div id="bannerBg" className="banner-bg"></div>
        <div className="container">
          <div className="row">
            <div className="banner-inner" id="bannerInner">
              <div className="content">
                <div className="content-inner">
                  <h1>
                    <div className="line">
                      <span>Helping student pay</span>
                    </div>
                    <div className="line">
                      <span>off their ridiculous debts</span>
                    </div>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt doloremque repellendus pariatur ad. Necessitatibus
                    beatae, alias assumenda.
                  </p>
                  <div className="btn-row">
                    <a href="/">Apply Today</a>
                  </div>
                  <div className="play-video">
                    <div className="play-video cover"></div>
                    <span>
                      <img src={play} alt="play icon" />
                      Watch Video
                    </span>
                  </div>
                </div>
              </div>
              <div className="image">
                <div className="image-inner">
                  <img src={hand} alt="Hand" />
                  <div className="feature-banner" id="featureBanner">
                    0% Interest
                  </div>
                  <div className="feature-banner green" id="featureBannerGreen">
                    No Credit Checks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
