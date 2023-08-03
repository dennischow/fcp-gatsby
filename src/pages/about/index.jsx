import * as React from "react";
import { Link } from "gatsby";

import "./index.styles.scss";
import AppLayout from "../../components/shared/app-layout/app-layout.component";
import Seo from "../../components/seo";

const PageAbout = () => (
    <AppLayout>
        <Seo title="About" />
        <div className="page page-about">
            <h1>About</h1>
            <p>
                <Link to="/">homepage</Link> <br />
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </p>
        </div>
    </AppLayout>
);

export default PageAbout;
