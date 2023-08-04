import * as React from "react";
import { Link } from "gatsby";

import AppLayout from "../../../components/shared/app-layout/app-layout";
import AppFeatureBanner from "../../../components/shared/app-feature-banner/app-feature-banner";
import Seo from "../../../components/seo";

import * as CONSTANTS from "../../../common/constants";

const PageArticlesOverview = () => {
    return (
        <AppLayout>
            <Seo title={`Articles Overview | ${CONSTANTS.BRAND_NAME}`} />
            <div className="page-articles-overview">
                <AppFeatureBanner
                    type="default"
                    heroBackgroundUrl={""}
                    heading="A casual corner to share what's on my mind"
                    subHeading="So random uh? It's my style"
                />
                <h1>Articles Overview</h1>
            </div>
        </AppLayout>
    )
};

export default PageArticlesOverview;
