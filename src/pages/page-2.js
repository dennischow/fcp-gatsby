import * as React from "react";
import { Link } from "gatsby";

import AppLayout from "../components/shared/app-layout/app-layout.component";
import Seo from "../components/seo";

const SecondPage = () => (
    <AppLayout>
        <Seo title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </AppLayout>
);

export default SecondPage;
