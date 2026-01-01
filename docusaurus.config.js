/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GraphQL Authentication",
  tagline: "GraphQL authentication for your headless Craft CMS applications.",
  projectName: "graphql-authentication-docs",
  organizationName: "jamesedmonston",
  url: "https://graphql-authentication.jamesedmonston.co.uk",
  favicon: "assets/favicon.ico",
  baseUrl: "/",
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebar.js"),
          editUrl:
            "https://github.com/jamesedmonston/graphql-authentication-docs/edit/master/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
    }),
};

module.exports = config;
