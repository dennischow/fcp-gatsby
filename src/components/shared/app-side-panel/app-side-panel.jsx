import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

import useUIStore from "../../../store/ui";
import AppPanelContact from "../app-panel-contact/app-panel-contact";
import AppPanelArticlesSearch from "../app-panel-articles-search/app-panel-articles-search";

const AppSidePanel = () => {
    const { isPanelContactShow, isPanelSearchShow, setIsPanelSearchShow } = useUIStore();
    const location = useLocation();

    useEffect(() => {
        setIsPanelSearchShow(false);
    }, [location.pathname]);

    return (
        <>
            {(isPanelContactShow || isPanelSearchShow) && (
                <div className="app-side-panel">
                    <div className="app-side-panel__inner">
                        {isPanelContactShow && <AppPanelContact />}
                        {isPanelSearchShow && <AppPanelArticlesSearch />}
                    </div>
                    <div className="app-side-panel__overlay"></div>
                </div>
            )}
        </>
    );
};

export default AppSidePanel;
