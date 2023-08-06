import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const AppStatistics = () => {
    const staticData = useStaticQuery(graphql`
        query {
            allProjectsJson {
                edges {
                    node {
                        id
                    }
                }
            }
            allArticlesJson {
                edges {
                    node {
                        id
                    }
                }
            }
            allTestimonialsJson {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `);

    const { allProjectsJson, allArticlesJson, allTestimonialsJson } = staticData;
    const projectsCount = allProjectsJson.edges.length;
    const articlesCount = allArticlesJson.edges.length;
    const testimonialsCount = allTestimonialsJson.edges.length;

    return (
        <div className="app-statistics">
            <div className="app-statistics__container">
                <div className="app-statistics__col">
                    <div className="app-statistics__box">
                        <p className="app-statistics__content">
                            <span className="app-statistics__num">{projectsCount}</span>
                            <span className="app-statistics__text">project uploaded</span>
                        </p>
                    </div>
                    <div className="app-statistics__box">
                        <p className="app-statistics__content">
                            <span className="app-statistics__num">{articlesCount}</span>
                            <span className="app-statistics__text">articles shared</span>
                        </p>
                    </div>
                    <div className="app-statistics__box">
                        <p className="app-statistics__content">
                            <span className="app-statistics__num">{testimonialsCount}</span>
                            <span className="app-statistics__text">testimonials received</span>
                        </p>
                    </div>
                    <div className="app-statistics__box">
                        <p className="app-statistics__content">
                            <span className="app-statistics__num">Infinite</span>
                            <span className="app-statistics__text">passion</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStatistics;
