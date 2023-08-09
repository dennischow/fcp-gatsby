/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

// Function to fetch API data and generate JSON file
async function fetchApiAndGenerateJsonFiles() {
    try {
        // Fetch data from multiple APIs concurrently
        const [projects, articles, testimonials] = await Promise.all([
            axios.get(process.env.REACT_APP_DEFAULT_ENDPOINT_WORKS),
            axios.get(process.env.REACT_APP_DEFAULT_ENDPOINT_ARTICLES),
            axios.get(process.env.REACT_APP_DEFAULT_ENDPOINT_TESTIMONIALS),
        ]);

        const projectsDataPath = path.resolve(`${__dirname}/src/data/projects.json`);
        await fs.outputJson(projectsDataPath, projects.data);

        const articlesDataPath = path.resolve(`${__dirname}/src/data/articles.json`);
        await fs.outputJson(articlesDataPath, articles.data);

        const testimonialsDataPath = path.resolve(`${__dirname}/src/data/testimonials.json`);
        await fs.outputJson(testimonialsDataPath, testimonials.data);

        console.log("JSON files generated successfully");
    } catch (error) {
        console.error("Error fetching external APIs data:", error);
    }
}

exports.onPreInit = async () => {
    // Fetch API data and generate JSON file before building pages
    await fetchApiAndGenerateJsonFiles();
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Generate project details pages
    try {
        const projectsResult = await graphql(`
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
            }
        `);

        // Iterate through the GraphQL data layer and perform page creation
        projectsResult.data.allProjectsJson.edges.forEach(({ node: currentPost }) => {
            createPage({
                path: `/projects/details/${currentPost.url_title}`,
                component: path.resolve(`./src/templates/projects-details.jsx`), // Path to your template component
                context: {
                    currentPost, // Pass data to the template component
                },
            });
        });
    } catch (error) {
        console.error("Error fetching external API data:", error);
    }

    // Generate article details pages
    try {
        const articlesResult = await graphql(`
            query {
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

        // Iterate through the GraphQL data layer and perform page creation
        articlesResult.data.allArticlesJson.edges.forEach(({ node: currentPost }) => {
            createPage({
                path: `/articles/details/${currentPost.url_title}`,
                component: path.resolve(`./src/templates/articles-details.jsx`), // Path to your template component
                context: {
                    articleEntries: articlesResult.data.allArticlesJson.edges.map((item => item.node)),
                    currentPost, // Pass data to the template component
                },
            });
        });
    } catch (error) {
        console.error("Error fetching external API data:", error);
    }
};

// Modify the webpack configuration
// to add external dependencies like "canvas" and "jsdom" to the webpack configuration
// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//         externals: {
//             canvas: "commonjs canvas",
//             jsdom: "commonjs jsdom",
//         },
//     });
// };

// exports.createPages = async ({ actions }) => {
//     const { createPage } = actions;

//     try {
//         // Fetch data from the external API
//         const response = await axios.get(process.env.REACT_APP_DEFAULT_ENDPOINT_WORKS);

//         // Create a JSON file in the data folder
//         const jsonDataPath = path.resolve(`${__dirname}/src/data/projects.json`);
//         await fs.outputJson(jsonDataPath, response.data);

//         // Loop through the API response and create pages
//         response.data.forEach((post) => {
//             createPage({
//                 path: `/projects/details/${post.url_title}`,
//                 component: path.resolve(`./src/templates/projects-details.jsx`), // Path to your template component
//                 context: {
//                     post, // Pass data to the template component
//                 },
//             });
//         });
//     } catch (error) {
//         console.error("Error fetching external API data:", error);
//     }
// };
