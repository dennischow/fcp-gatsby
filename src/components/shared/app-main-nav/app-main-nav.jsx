import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaHome, FaUser, FaRegLightbulb, FaRss, FaRegEnvelope, FaSearch } from "react-icons/fa";

import * as CONSTANTS from "../../../common/constants";

const AppMainNav = ({ isMainNavShown, ...otherProps }) => {


    const getMainNavClassName = ({ isActive }) => {
        const classNames = ["app-main-nav"];

        if (isActive) {
            classNames.push("app-main-nav--is-active");
        }

        return classNames.join(" ");
    };

    return (
        <nav className={getMainNavClassName({isActive: isMainNavShown})}>
            <ul className="app-main-nav__list">
                <li className="app-main-nav__item">
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.home.path}>
                        <span className="app-main-nav__icon">
                            <FaHome />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.home.name}</span>
                    </Link>
                </li>
                <li className="app-main-nav__item">
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.about.path}>
                        <span className="app-main-nav__icon">
                            <FaUser />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.about.name}</span>
                    </Link>
                </li>
                <li className="app-main-nav__item">
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.projectsOverview.path}>
                        <span className="app-main-nav__icon">
                            <FaRegLightbulb />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.projectsOverview.name}</span>
                    </Link>
                </li>
                <li className="app-main-nav__item">
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.articlesOverview.path}>
                        <span className="app-main-nav__icon">
                            <FaRss />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.articlesOverview.name}</span>
                    </Link>
                </li>
                <li className="app-main-nav__item">
                    <button className="app-main-nav__link" type="button">
                        <span className="app-main-nav__icon">
                            <FaRegEnvelope />
                        </span>
                        <span className="app-main-nav__text">Contact</span>
                    </button>
                </li>
                <li className="app-main-nav__item">
                    <button className="app-main-nav__link" type="button">
                        <span className="app-main-nav__icon">
                            <FaSearch />
                        </span>
                        <span className="app-main-nav__text">Search</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default AppMainNav;
