import React, { Fragment } from "react";
import sanitizeHtml from "sanitize-html";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";

import * as CONSTANTS from "../common/constants";
import * as UTILS from "../common/utils";
import AppLayout from "../components/shared/app-layout/app-layout";
import AppFeatureBanner from "../components/shared/app-feature-banner/app-feature-banner";
import Seo from "../components/seo/seo";

const ProjectsDetails = ({ pageContext }) => {
    const { currentPost } = pageContext;

    return (
        <AppLayout>
            <Seo title={`${currentPost?.title} | Project Details | ${CONSTANTS.BRAND_NAME}`} />
            <div className="page-projects-details">
                <AppFeatureBanner
                    type="info"
                    heroBackgroundUrl={currentPost?.thumbnail}
                    heading={currentPost?.title}
                    subHeading={UTILS.convertProjectCatIdToName(currentPost?.channel_id)}
                />

                <div className="project-details">
                    <div className="project-details__container app-container">

                        <div className="project-details__wrapper">
                            <div className="project-details__visual">
                                <figure className="project-details__visual-figure">
                                    {currentPost?.full_image?.map((item, index) => (
                                        <img className="project-details__visual-image"
                                            key={index}
                                            src={item.image}
                                            alt={`${currentPost?.title} screenshot ${index + 1} of ${currentPost?.full_image.length}`} />
                                    ))}
                                </figure>
                            </div>

                            <div className="project-details__info">
                                <div className="project-details__info-content">
                                    <p className="project-details__info-subject">Description:</p>
                                    <div className="project-details__info-description"
                                        dangerouslySetInnerHTML={{__html: sanitizeHtml(currentPost?.description)}}>
                                    </div>
                                    <p className="project-details__info-subject">Year:</p>
                                    <p className="project-details__info-description">{currentPost?.project_date}</p>
                                    <p className="project-details__info-subject">Produced with:</p>
                                    <p className="project-details__info-description">{currentPost?.language_software}</p>
                                    {currentPost?.visit_url && (
                                        <Fragment>
                                            <p className="project-details__info-subject">Demo :</p>
                                            <p className="project-details__info-description">
                                                <a className="project-details__info-live-demo-link"
                                                    href={currentPost?.visit_url}
                                                    target="_blank"
                                                    title="Open in new window"
                                                    rel="noopener noreferrer">
                                                        {currentPost?.visit_url}
                                                </a>
                                            </p>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                        </div>

                        <p className="project-details__buttons-container">
                            <Link className="app-cta app-cta--orange" to={CONSTANTS.ROUTES.projectsOverview.path}>
                                <FaArrowLeft /> Back to projects overview
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ProjectsDetails;
