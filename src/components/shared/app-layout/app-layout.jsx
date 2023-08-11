/**
 * AppLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react";
import PropTypes from "prop-types";

import "../../../assets/styles/index.scss";

import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";
import AppStatistics from "../app-statistics/app-statistics";
import AppSidePanel from "../app-side-panel/app-side-panel";

const AppLayout = ({ children }) => {
    return (
        <>
            <div className="app-view">
                <AppHeader />

                <main className="app-main">{children}</main>

                <AppStatistics />

                <AppFooter />
            </div>

            <AppSidePanel />
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
