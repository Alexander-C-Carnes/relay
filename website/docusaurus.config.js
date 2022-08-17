/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const versions = require('./versions.json');
const {fbContent, isInternal} = require('internaldocs-fb-helpers');

module.exports = {
  title: 'Firebolt',
  tagline: 'Firebolt, woohoo',
  url: 'https://relay.dev',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'rdkcentral',
  projectName: 'firebolt-documentation',
  scripts: [],
  favicon: 'img/favicon.png',
  customFields: {
    users: [
      {
        caption: 'Sky Media',
        image: '/img/logos/1stdibs.png',
        infoLink: 'https://www.1stdibs.com/',
        pinned: true,
        description: 'Used on Sky Glass',
      },
      {
        caption: 'Artsy',
        image: '/img/logos/artsy.png',
        infoLink: 'http://artsy.github.io/open-source/',
        pinned: true,
        description: 'Used on artsy.net, and the React Native iOS app, Eigen.',
      },

    ],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',
  presets: [
    [
      require.resolve('docusaurus-plugin-internaldocs-fb/docusaurus-preset'),
      {
        docs: {
          showLastUpdateAuthor: fbContent({
            internal: false,
            external: true,
          }),
          showLastUpdateTime: fbContent({
            internal: false,
            external: true,
          }),
          editUrl: "https://github.com/rdkcentral/firebolt-documentation",

          path: './docs/',

          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: fbContent({
            internal: 'current',
            external: versions[0],
          }),
          onlyIncludeVersions: fbContent({
            internal: ['current'],
            external: [
              'current',
              ...versions.filter(
                version => version !== 'experimental' && version !== 'classic',
              ),
            ],
          }),
          versions: {
            current: {
              label: 'Next 🚧',
            },
          },
        },
        blog: {},
        theme: {
          customCss: [
            './src/css/docusaurus-1.css',
            './src/css/prism.css',
            './src/css/customTheme.css',
            './src/css/custom.css',
          ],
        },
        // gtag: {
        //   trackingID: 'UA-44373548-50',
        // },
        // googleAnalytics: {
        //   trackingID: 'UA-44373548-50',
        // },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects: function (toPath) {
          if (toPath.startsWith('/docs/')) {
            const docPath = toPath.substring(6);
            const fromPaths = ['/docs/en/' + docPath];
            if (isInternal()) {
              fromPaths.push('/docs/next/' + docPath);
              fromPaths.push('/docs/en/next/' + docPath);
            }
            return fromPaths;
          }
        },
        // redirects: [
        //   {
        //     to: '/docs/',
        //     from: [
        //       '/docs/en/introduction-to-relay',
        //       '/docs/introduction-to-relay',
        //     ],
        //   },
        //   {
        //     to: '/docs/getting-started/step-by-step-guide/',
        //     from: ['/docs/en/quick-start-guide', '/docs/quick-start-guide'],
        //   },
        //   {
        //     to: '/docs/getting-started/step-by-step-guide/',
        //     from: [
        //       '/docs/en/experimental/step-by-step',
        //       '/docs/experimental/step-by-step',
        //     ],
        //   },
        //   {
        //     to: '/docs/guides/testing-relay-with-preloaded-queries/',
        //     from: ['/docs/guides/testing-relay-with-preloaded-components/'],
        //   },
        //
        //
        //   {
        //     to: '/docs/principles-and-architecture/thinking-in-relay/',
        //     from: [
        //       '/docs/en/thinking-in-relay.html',
        //       '/docs/en/thinking-in-relay',
        //       '/docs/thinking-in-relay.html',
        //       '/docs/thinking-in-relay',
        //     ],
        //   },
        //   {
        //     to: '/docs/guides/type-emission/',
        //     from: ['/docs/en/type-emission', '/docs/type-emission'],
        //   },
        //   {
        //     to: '/docs/guides/client-schema-extensions/',
        //     from: [
        //       '/docs/en/local-state-management',
        //       '/docs/en/next/local-state-management',
        //       '/docs/local-state-management',
        //       '/docs/next/local-state-management',
        //     ],
        //   },
        //   {
        //     to: '/docs/api-reference/store/',
        //     from: [
        //       '/docs/en/relay-store',
        //       '/docs/en/next/relay-store',
        //       '/docs/relay-store',
        //       '/docs/next/relay-store',
        //     ],
        //   },
        // ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Firebolt',
      style: 'primary',
      hideOnScroll: false,
      items: [
        {
          to: 'docs/',
          label: 'Docs',
          position: 'left',
        },

        {
          to: '/help',
          label: 'Help',
          position: 'left',
        },
        {
          href: 'https://github.com/rdkcentral/firebolt-documentation',
          label: 'GitHub',
          position: 'left',
        },
        fbContent({
          internal: null,
          external: {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: '/versions',
                label: 'All versions',
              },
            ],
          },
        }),
      ].filter(Boolean),
    },
    image: 'img/relay.png',
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              href: '/docs',
              target: '_self',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'User Showcase',
              href: '/users',
              target: '_self',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
            {
              label: 'Data Policy',
              href: 'https://opensource.facebook.com/legal/data-policy/',
            },
            {
              label: 'Cookie Policy',
              href: 'https://opensource.facebook.com/legal/cookie-policy/',
            },
          ],
        },
      ],
      logo: {
        src: 'img/relay.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} RDK Central. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript',
    },
    // algolia: {
    //   appId: 'BH4D9OD16A',
    //   apiKey: '3d7d5825d50ea36bca0e6ad06c926f06',
    //   indexName: 'relay',
    //   contextualSearch: true,
    // },
  },
};
