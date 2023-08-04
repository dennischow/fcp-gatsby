import React, { useState } from "react";

import AppLayout from "../../../components/shared/app-layout/app-layout";
import AppFeatureBanner from "../../../components/shared/app-feature-banner/app-feature-banner";
import Seo from "../../../components/seo";

const PageProjectsOverview = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(4);
    const categoryTabsList = [
        {
            id: 4,
            text: "Web Projects",
            definition: "thinking + coding",
        },
        {
            id: 5,
            text: "Print Projects",
            definition: "layout + cmyk",
        },
        {
            id: 6,
            text: "Tee Projects",
            definition: "creativity + production",
        },
    ];

    const getCategoryListElementClassName = (isActive) => {
        const classNames = ["projects-category__list-item"];
        if (isActive) {
            classNames.push("projects-category__list-item--active");
        }
        return classNames.join(" ");
    };

    const categorySelectHandler = (event, catId) => {
        setActiveCategoryId(catId);
        // categoryToShow(catId);
        console.log(event.target, catId);
    };

    return (
        <AppLayout>
            <Seo title="About" />
            <div className="app-page page-projects-overview">
                <AppFeatureBanner
                    type="default"
                    heroBackgroundUrl={""}
                    heading="Nowadays I focus on front-end web development"
                    subHeading="Let my work samples speak on my behalf"
                />

                <div className="projects-category">
                    <div className="projects-category__container">
                        <ul className="projects-category__list" role="tablist">
                            {categoryTabsList.map((item, index) => (
                                <li className={getCategoryListElementClassName(activeCategoryId === item.id)} key={item.id} role="tab">
                                    <button
                                        className="projects-category__btn"
                                        onClick={(event) => categorySelectHandler(event, item.id)}>
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <h1>Projects Overview</h1>
            </div>
        </AppLayout>
    );

};

export default PageProjectsOverview;
