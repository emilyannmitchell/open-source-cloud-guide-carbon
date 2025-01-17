module.exports = {
  pathPrefix: "/open-source-cloud-guide-carbon",
  siteMetadata: {
    title: "Open Source Cloud Guide",
    description: "Open Source Cloud Guide",
    keywords: "open source,cloud",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    'gatsby-theme-carbon'
  ],
};
