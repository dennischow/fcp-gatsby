import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const AppHeader = () => (
    <header className="app-header">
        {/* <div className="app-header__scroll-progress-bar">
            <div className="app-header__scroll-progress-grow"></div>
        </div>
        <div className="app-header__container">
            <h1 className="app-header__brand">
                <a className="app-header__brand-link" href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38.526"
                        height="38.525"
                        className="app-header__brand-logo">
                        <path
                            fill="#F79420"
                            d="M23.058 10.659h-.006v-.002h-3.354v6.171h3.36a2.266 2.266 0 0 1 2.262 2.262 2.269 2.269 0 0 1-2.268 2.263l-3.354-.001v6.17h3.354v-.002l.006.001c4.654 0 8.433-3.774 8.433-8.431a8.434 8.434 0 0 0-8.433-8.431M19.263 0C8.623.003 0 8.626 0 19.265s8.623 19.258 19.263 19.261c10.639-.003 19.264-8.622 19.264-19.261S29.901.003 19.263 0M7.047 19.407v6.875a14.054 14.054 0 0 1-1.889-7.018c.014-7.792 6.315-14.094 14.105-14.107 7.793.014 14.096 6.315 14.109 14.108-.014 7.788-6.316 14.09-14.109 14.104a14.071 14.071 0 0 1-6.043-1.381v-4.811c.724.203 1.472.345 2.259.345v.001h3.364v-6.17l-3.364-.002a2.262 2.262 0 0 1 0-4.522h3.364v-6.171h-3.364v.001a8.432 8.432 0 0 0-8.432 8.432v.316z"></path>
                    </svg>
                    <span className="app-header__brand-name">Fat-Cow Production</span>
                </a>
            </h1>
            <button className="app-header__nav-toggle" type="button" aria-label="Toggle mobile navigation">
                <span className="app-header__nav-toggle-text">Menu</span>
                <span className="app-header__nav-toggle-icon">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                </span>
            </button>
            <nav className="app-main-nav">
                <ul className="app-main-nav__list">
                    <li className="app-main-nav__item app-main-nav__item--active">
                        <a className="app-main-nav__link" exact="true" href="/">
                            <span className="app-main-nav__icon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                </svg>
                            </span>
                            <span className="app-main-nav__text">Home</span>
                        </a>
                    </li>
                    <li className="app-main-nav__item">
                        <a className="app-main-nav__link" href="/about">
                            <span className="app-main-nav__icon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                </svg>
                            </span>
                            <span className="app-main-nav__text">About</span>
                        </a>
                    </li>
                    <li className="app-main-nav__item">
                        <a className="app-main-nav__link" href="/projects/overview">
                            <span className="app-main-nav__icon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 352 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path>
                                </svg>
                            </span>
                            <span className="app-main-nav__text">Projects</span>
                        </a>
                    </li>
                    <li className="app-main-nav__item">
                        <a className="app-main-nav__link" href="/articles/overview">
                            <span className="app-main-nav__icon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"></path>
                                </svg>
                            </span>
                            <span className="app-main-nav__text">Articles</span>
                        </a>
                    </li>
                    <li className="app-main-nav__item">
                        <button className="app-main-nav__link" type="button">
                            <span className="app-main-nav__icon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                                </svg>
                            </span>
                            <span className="app-main-nav__text">Contact</span>
                        </button>
                    </li>
                    <li className="app-main-nav__item">
                        <button className="app-main-nav__link" type="button">
                            <span className="app-main-nav__icon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </span>
                            <span className="app-main-nav__text">Search</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <button className="app-header__scroll-to-top app-header__scroll-to-top--peneding" type="button">
            scroll to Top{" "}
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
        </button> */}
    </header>
);

AppHeader.propTypes = {
    siteTitle: PropTypes.string,
};

AppHeader.defaultProps = {
    siteTitle: ``,
};

export default AppHeader;
