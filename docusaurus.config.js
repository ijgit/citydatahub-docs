// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "City Data-Hub",
  tagline:
    "지속 가능한 도시성장과 삶의 질 향상을 위한 데이터 기반의 스마트 시티를 실현하는 개방형 데이터 허브 아키텍처 및 핵심 기술",
  url: "https://docs.citydatahub.kr",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/docs",
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
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
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        // title: 'My Site',
        hideOnScroll: true,
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Document',
          // },
          // {
          //   type: 'search',
          //   position: 'right',
          // }
          {
            label: "Docs",
            position: "left", // or 'right'
            items: [
              {
                label: "Security",
                to: "/docs/security/intro",
              },
              {
                label: "another_module",
                to: "/docs/another_module/intro",
              },
            ],
          },
          {
            href: "http://citydatahub.kr/",
            label: "City Data-hub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash"],
      },
    }),
};

module.exports = config;
