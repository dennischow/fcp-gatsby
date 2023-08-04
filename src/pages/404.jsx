import React from "react";
import { Link } from "gatsby";

import AppLayout from "../components/shared/app-layout/app-layout.jsx";
import Seo from "../components/seo.jsx";
import * as CONSTANTS from "../common/constants";

const PageNotFound = () => {
    return (
        <AppLayout>
            <Seo title={`Page not found | ${CONSTANTS.BRAND_NAME}`} />
            <div className="page-not-found">
                <div className="not-found">
                    <div className="not-found__container app-container">
                        <div className="not-found__content">
                            <p className="not-found__status">Don’t drink and drive, and you’ll stay alive</p>
                            <h1 className="not-found__message">404 page not found</h1>
                            <h2 className="not-found__choice">
                                You gotta go{" "}
                                <Link className="not-found__link" to={CONSTANTS.ROUTES.home.path}>
                                    home
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default PageNotFound;
