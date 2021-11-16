const config = {
  gatsby: {
    pathPrefix: '',
    siteUrl: 'http://docs.citydatahub.kr',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: ``,
    logoLink: '',
    title: '',//`<div><a href='/'><h1>Document</h1></a></div>`,
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '1_overview',
      '2_install',
      '3_init',
      '4_module',
      '5_user',
    ],
    collapsedNav: [
      '2_install',
    ],
    links: [{ text: 'City Data-Hub', link: 'http://citydatahub.kr' }],
    frontline: false,
    ignoreIndex: true,
    title:'',  
  },
  siteMetadata: {
    title: 'City Data-Hub | Documents',
    description: '',
    ogImage: null,
    docsLocation: '',
    favicon: './src/components/images/logo-only.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#ffffff', //'#6b37bf',
      theme_color: 'ffffff',//'#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
