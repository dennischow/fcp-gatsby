import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FaArrowRight, FaCode, FaPaintBrush, FaMusic } from "react-icons/fa";

import * as CONSTANTS from "../common/constants";
import * as UTILS from "../common/utils";
import AppLayout from "../components/shared/app-layout/app-layout";
import AppFeatureBanner from "../components/shared/app-feature-banner/app-feature-banner";
import Seo from "../components/seo/seo";
import TestimonialWidget from "../components/testimonial-widget/testimonial-widget";
import YoutubePlayer from "../components/youtube-player/youtube-player"
import heroBackgroundImg from "../assets/images/home/polygon-colored-crossed-dark-extend-bg.jpg";

const PageHome = () => {
    const staticData = useStaticQuery(graphql`
        query {
            allProjectsJson {
                edges {
                    node {
                        author_id
                        channel_id
                        description
                        edit_date
                        entry_date
                        entry_id
                        full_image {
                            image
                            row_id
                        }
                        language_software
                        project_name
                        status
                        thumbnail
                        title
                        url_title
                        visit_url
                        project_date
                    }
                }
            }
            allArticlesJson {
                edges {
                    node {
                        blog_body
                        entry_date
                        entry_id
                        related_post
                        short_text
                        thumb_image
                        thumb_image_hotlink
                        title
                        url_title
                    }
                }
            }
        }
    `);
    const projectEntries = staticData.allProjectsJson.edges.map(item => item.node);
    const articleEntries = staticData.allArticlesJson.edges.map(item => item.node);
    const [isYoutubePlayerOn, setIsYoutubePlayerOn] = useState(false);

    const openYoutubePlayer = () => setIsYoutubePlayerOn(true);
    const closeYoutubePlayer = () => setIsYoutubePlayerOn(false);

    return (
        <AppLayout>
            <Seo
                title={`Home | ${CONSTANTS.BRAND_NAME}`}
                description="Fat-Cow Production is an e-channel to showcase Dennis Chow's creativity and passion. It shares my random moments, taste of music, tech news and design inspirations."
            />
            <div className="app-page page-home">
                <AppFeatureBanner
                    type="hero"
                    heroBackgroundUrl={heroBackgroundImg}
                    heading="<span>Just a</span> <span>Front-End</span> <span>Web Developer</span>"
                    subHeading="Who cares about things that users see and interact with"
                />

                <section className="section projects-highlight">
                    <div className="projects-highlight__container">
                        <div className="projects-highlight__teaser">
                            <div className="projects-highlight-teaser-box">
                                <h2 className="projects-highlight__teaser-title">Creativity</h2>
                                <p className="projects-highlight__teaser-des">
                                    There are different ways to be creative. Find out what mine are.
                                </p>
                                <Link className="projects-highlight__teaser-link app-cta app-cta--white" to={CONSTANTS.ROUTES.projectsOverview.path}>
                                    Check it out <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="projects-highlight__entries">
                            {projectEntries.length > 0 && projectEntries.slice(0, 4).map((item, index) => (
                                <Link className="projects-highlight__entry" key={item.entry_id} to={`${CONSTANTS.ROUTES.projectsDetails.path}/${item.url_title}`}>
                                    <div className="projects-highlight__entry-visual"
                                        role="img"
                                        style={{backgroundImage: `url(${item.thumbnail})`}}>
                                    </div>
                                    <p className="projects-highlight__entry-cat">{UTILS.convertProjectCatIdToName(item.channel_id)}</p>
                                    <div className="projects-highlight__entry-title">
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section recent-articles">
                    <div className="recent-articles__container">
                        <div className="recent-articles__header">
                            <h2 className="recent-articles__header-title">Recent article posts</h2>
                            <p className="recent-articles__header-des">
                                A casual corner to share what's on my mind. Come hang!
                            </p>
                        </div>
                        <div className="recent-articles__entries">
                            {articleEntries.length > 0 && articleEntries.slice(0, 8).map((item, index) => (
                                <Link className="recent-articles__entry" key={item.entry_id} to={`${CONSTANTS.ROUTES.articlesDetails.path}/${item.url_title}`}>
                                    <div className="recent-articles__entry-visual"
                                        role="img"
                                        style={{backgroundImage: `url(${item.thumb_image ? item.thumb_image : item.thumb_image_hotlink})`}}>
                                    </div>
                                    <div className="recent-articles__entry-title">
                                        {item.title}
                                    </div>
                                    <small className="recent-articles__entry-info">
                                        <time className="recent-articles__entry-date">{UTILS.convertToRelativeDate(item.entry_date)}</time>
                                        {/* {" "}|{" "}
                                        <span className="recent-articles__entry-views">[Views]</span> */}
                                    </small>
                                </Link>
                            ))}
                        </div>
                        <Link className="recent-articles__view-all-link" to={CONSTANTS.ROUTES.articlesOverview.path}>
                            View all post <FaArrowRight />
                        </Link>
                    </div>
                </section>

                <section className="section passionate-highlight">
                    <div className="passionate-highlight__container">
                        <div className="passionate-highlight__teaser">
                            <div className="passionate-highlight-teaser-box">
                                <h2 className="passionate-highlight__teaser-title">Passionate</h2>
                                <p className="passionate-highlight__teaser-des">
                                    I have a passion. Want to know what it is? Come check it out.
                                </p>
                                <Link className="passionate-highlight__teaser-link app-cta app-cta--white" to={CONSTANTS.ROUTES.about.path}>
                                    Learn more <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="passionate-highlight__interests">
                            <div className="passionate-highlight__interest">
                                <p className="passionate-highlight__interest-icon">
                                    <FaCode />
                                </p>
                                <p className="passionate-highlight__interest-text">Code</p>
                            </div>
                            <div className="passionate-highlight__interest">
                                <p className="passionate-highlight__interest-icon">
                                    <FaPaintBrush />
                                </p>
                                <p className="passionate-highlight__interest-text">Design</p>
                            </div>
                            <button className="passionate-highlight__interest" onClick={openYoutubePlayer}>
                                <p className="passionate-highlight__interest-icon">
                                    <FaMusic />
                                </p>
                                <p className="passionate-highlight__interest-text">Music</p>
                            </button>
                        </div>
                    </div>
                </section>

                {isYoutubePlayerOn && <YoutubePlayer closeYoutubePlayer={closeYoutubePlayer} />}

                <TestimonialWidget isContentExpandedByDefault={false} entriesLimitByDefault={5} />
            </div>
        </AppLayout>
    );
};

export default PageHome;
