import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Universidad Mundo Maya',
  tagline: 'Portal de Soporte',
  favicon: 'img/favicon.ico',

  url: 'https://tu-sitio.com',
  baseUrl: '/',

  organizationName: 'umma',
  projectName: 'portal-docs',

  onBrokenLinks: 'ignore', 
  onBrokenMarkdownLinks: 'warn',
  
  markdown: {
    format: 'mdx',
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        language: ["es"],
        indexDocs: true,
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          routeBasePath: 'docs', 
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Portal UMMA',
      logo: {
        alt: 'Logo UMMA',
        src: 'img/logo-umma.png', 
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Home', 
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            { label: 'Inicio', to: '/docs/Home' }, 
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Portal UMMA.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;