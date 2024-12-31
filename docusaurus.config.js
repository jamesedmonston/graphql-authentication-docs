// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GraphQL Authentication",
  tagline: "GraphQL authentication for your headless Craft CMS applications.",
  url: "https://graphql-authentication.jamesedmonston.co.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "assets/favicon.ico",
  organizationName: "jamesedmonston",
  projectName: "graphql-authentication-docs",
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
      footer: {
        style: "dark",
        copyright: `Copyright &copy; ${new Date().getFullYear()} James Edmonston. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
