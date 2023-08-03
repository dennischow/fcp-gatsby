/**
 * AppLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./app-layout.styles.scss";
import AppHeader from "../app-header/app-header.component";
import AppFooter from "../app-footer/app-footer.component";

const AppLayout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <div className="app-view">
                <AppHeader siteTitle={data.site.siteMetadata?.title || `Title`} />

                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0 1.0875rem 1.45rem`,
                    }}>
                    <main>{children}</main>
                    <footer
                        style={{
                            marginTop: `2rem`,
                        }}>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.com">Gatsby</a>
                    </footer>
                </div>

                <AppFooter />
            </div>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
