import React, { useState } from "react";
import { Link } from "gatsby";
import { FaArrowRight, FaCode, FaPaintBrush, FaMusic } from "react-icons/fa";

import * as CONSTANTS from "../common/constants";
import AppLayout from "../components/shared/app-layout/app-layout";
import AppFeatureBanner from "../components/shared/app-feature-banner/app-feature-banner";
import Seo from "../components/seo";
import YoutubePlayer from "../components/youtube-player/youtube-player"
import heroBackgroundImg from "../assets/images/home/polygon-colored-crossed-dark-extend-bg.jpg";

const PageHome = () => {
    const [isYoutubePlayerOn, setIsYoutubePlayerOn] = useState(false);

    const openYoutubePlayer = () => setIsYoutubePlayerOn(true);
    const closeYoutubePlayer = () => setIsYoutubePlayerOn(false);

    return (
        <AppLayout>
            <Seo title={`Home | ${CONSTANTS.BRAND_NAME}`} />
            <div className="app-page page-home">
                <AppFeatureBanner
                    type="hero"
                    heroBackgroundUrl={heroBackgroundImg}
                    heading="<span>Just a</span> <span>Front-End</span> <span>Web Developer</span>"
                    subHeading="Who cares about things that users see and interact with"
                />

                <section className="section passionate-highlight">
                    <div className="passionate-highlight__container">
                        <div className="passionate-highlight__teaser">
                            <div className="passionate-highlight-teaser-box">
                                <h2 className="passionate-highlight__teaser-title">Passionate</h2>
                                <p className="passionate-highlight__teaser-des">
                                    I have a passion. Want to know what it is? Come check it out.
                                </p>
                                <Link className="passionate-highlight__teaser-link app-cta app-cta--white" to={CONSTANTS.ROUTES.about.path}>
                                    Learn more <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="passionate-highlight__interests">
                            <div className="passionate-highlight__interest">
                                <p className="passionate-highlight__interest-icon">
                                    <FaCode />
                                </p>
                                <p className="passionate-highlight__interest-text">Code</p>
                            </div>
                            <div className="passionate-highlight__interest">
                                <p className="passionate-highlight__interest-icon">
                                    <FaPaintBrush />
                                </p>
                                <p className="passionate-highlight__interest-text">Design</p>
                            </div>
                            <button className="passionate-highlight__interest" onClick={openYoutubePlayer}>
                                <p className="passionate-highlight__interest-icon">
                                    <FaMusic />
                                </p>
                                <p className="passionate-highlight__interest-text">Music</p>
                            </button>
                        </div>
                    </div>
                </section>

                {isYoutubePlayerOn && <YoutubePlayer closeYoutubePlayer={closeYoutubePlayer} />}
            </div>
        </AppLayout>
    );
};

export default PageHome;
