const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://citydatahub.kr',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: ``, //'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: '', //'https://hasura.io/learn/',
    title: `<div>
              <a href='/'><h1>Document</h1></a>
            </div>`,
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
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
      '/setup',
      '/test'
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'City Data-Hub', link: 'http://citydatahub.kr' }],
    frontline: false,
    ignoreIndex: true,
    title:'',   //"<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
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
