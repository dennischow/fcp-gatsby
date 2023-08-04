import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import AppLayout from "../components/shared/app-layout/app-layout";
import AppFeatureBanner from "../components/shared/app-feature-banner/app-feature-banner";
import Seo from "../components/seo";
import heroBackgroundImg from "../assets/images/home/polygon-colored-crossed-dark-extend-bg.jpg";


const PageIndex = () => (
    <AppLayout>
        <Seo title="Homepage" />
        <div className="app-page page-homepage">
            <AppFeatureBanner
                type="hero"
                heroBackgroundUrl={heroBackgroundImg}
                heading="<span>Just a</span> <span>Front-End</span> <span>Web Developer</span>"
                subHeading="Who cares about things that users see and interact with"
            />
            <h1>Homepage</h1>
            <StaticImage
                src="../assets/images/home/polygon-colored-crossed-dark-extend-bg.jpg"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />
        </div>
    </AppLayout>
);

export default PageIndex;
