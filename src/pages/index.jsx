import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./index.scss";
import AppLayout from "../components/shared/app-layout/app-layout.component";
import Seo from "../components/seo";

const PageIndex = () => (
    <AppLayout>
        <Seo title="Homepage" />
        <div className="app-page page-homepage">
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <StaticImage
                src="../assets/images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />
            <p>
                <Link to="/about/">Go to About page</Link> <br />
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </p>
        </div>
    </AppLayout>
);

export default PageIndex;
