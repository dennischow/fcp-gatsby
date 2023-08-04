import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

import * as CONSTANTS from "../../../common/constants";
import useWindowScroll from "../../../hooks/use-window-scroll";
import AppMainNav from "../app-main-nav/app-main-nav";
import BrandLogoImg from "../../../assets/images/common/brand-logo.svg";

const AppHeader = () => {

    const [isMainNavShown, setIsMainNavShown] = useState(false);
    const windowScroll = useWindowScroll();

    const navToggleHandler = () => {
        setIsMainNavShown(!isMainNavShown);
    };

    const scrollToTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header className="app-header">
            <div className="app-header__scroll-progress-bar">
                <div
                    className="app-header__scroll-progress-grow"
                    style={{ width: `${windowScroll.percentage}%` }}></div>
            </div>
            <div className="app-header__container">
                <h1 className="app-header__brand">
                    <Link className="app-header__brand-link" to={CONSTANTS.ROUTES.home.path}>
                        <img className="app-header__brand-logo" src={BrandLogoImg} alt="logo" />
                        <span className="app-header__brand-name">{CONSTANTS.BRAND_NAME}</span>
                    </Link>
                </h1>
                <button className="app-header__nav-toggle" type="button" aria-label="Toggle mobile navigation" onClick={navToggleHandler}>
                    <span className="app-header__nav-toggle-text">Menu</span>
                    <span className="app-header__nav-toggle-icon">{isMainNavShown ? <FaTimes /> : <FaBars />}</span>
                </button>
                <AppMainNav isMainNavShown={isMainNavShown} />
            </div>
            <button className={`app-header__scroll-to-top ${windowScroll.percentage < 30 ? "app-header__scroll-to-top--peneding" : ""}`} type="button" onClick={scrollToTopHandler}>
                scroll to Top <FaArrowRight />
            </button>
        </header>
    )
};

AppHeader.propTypes = {
    siteTitle: PropTypes.string,
};

AppHeader.defaultProps = {
    siteTitle: ``,
};

export default AppHeader;
