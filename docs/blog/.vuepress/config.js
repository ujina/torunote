
module.exports = {
    title: 'TORU NOTE ', // Title for the site. This will be displayed in the navbar.
    theme: '@vuepress/theme-blog',
    themeConfig: {
      footer: {
        copyright: [
          {
            text: 'Privacy Policy',
            link: 'https://policies.google.com/privacy?hl=en-US',
          },
          {
            text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          },
        ],
        contact: [
          {
            type: 'github',
            link: 'https://github.com/ujina',
          },
          {
            type: 'twitter',
            link: 'https://twitter.com/ogasawaratoru',
          },
        ],
      },
      // Please keep looking down to see the available options.
    plugins: [
        '@vuepress/blog',
      ]
    },
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'ja', // this will be set as the lang attribute on <html>
      
      }
    }

  }

  