import * as React from "react";

import AppLayout from "../../../components/shared/app-layout/app-layout";
import AppFeatureBanner from "../../../components/shared/app-feature-banner/app-feature-banner";
import Seo from "../../../components/seo";

const PageProjectsOverview = () => (
    <AppLayout>
        <Seo title="About" />
        <div className="app-page page-projects-overview">
            <AppFeatureBanner
                type="default"
                heroBackgroundUrl={""}
                heading="Nowadays I focus on front-end web development"
                subHeading="Let my work samples speak on my behalf"
            />
            <h1>Projects Overview</h1>
        </div>
    </AppLayout>
);

export default PageProjectsOverview;
