module.exports = {
  title: "GraphQL Authentication",
  tagline: "GraphQL authentication for your headless Craft CMS applications.",
  url: "https://docs.jamesedmonston.co.uk/graphql-authentication",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jamesedmonston",
  projectName: "graphql-authentication-docs",
  themeConfig: {
    navbar: {
      title: "GraphQL Authentication",
      items: [
        {
          to: "/",
          label: "Docs",
        },
        {
          href: "https://github.com/jamesedmonston/graphql-authentication",
          label: "GitHub",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright &copy; ${new Date().getFullYear()} James Edmonston. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebar.js"),
          editUrl:
            "https://github.com/jamesedmonston/graphql-authentication-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
