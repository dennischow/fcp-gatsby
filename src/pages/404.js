import * as React from "react";

import AppLayout from "../components/shared/app-layout/app-layout.component";
import Seo from "../components/seo";

const NotFoundPage = () => (
    <AppLayout>
        <Seo title="404: Not found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </AppLayout>
);

export default NotFoundPage;
