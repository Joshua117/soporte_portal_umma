export default {
  "title": "Universidad Mundo Maya",
  "tagline": "Manual de usuario",
  "favicon": "img/Umma_BlancoC.png",
  "url": "https://tu-sitio.com",
  "baseUrl": "/",
  "organizationName": "umma",
  "projectName": "portal-docs",
  "onBrokenLinks": "ignore",
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": ["static"],

  "i18n": {
    "defaultLocale": "es",
    "locales": ["es"],
    "path": "i18n",
    "localeConfigs": {}
  },

  "themes": [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        "hashed": true,
        "language": ["es"],
        "indexDocs": true,
        "indexBlog": false,
        "forceIgnoreNoIndex": true,
        "explicitSearchResultPath": true
      }
    ]
  ],

  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.ts",
          "routeBasePath": "docs"
        },
        "blog": false,
        "theme": {
          "customCss": "./src/css/custom.css"
        }
      }
    ]
  ],

  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "respectPrefersColorScheme": true,
      "disableSwitch": false
    },
    "navbar": {
      "title": "Documentación UMMA",
      "logo": {
        "alt": "Logo UMMA",
        "src": "img/Umma_Blanco.png"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Soporte"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [],
      "copyright": "Copyright © 2026 Portal UMMA."
    },
    // ... (Mantén toda tu configuración de prism aquí)
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },

  // Todo lo que daba error va aquí adentro exclusivamente
  "customFields": {
    "markdown": {
      "format": "mdx",
      "mermaid": false,
      "emoji": true,
      "mdx1Compat": {
        "comments": true,
        "admonitions": true,
        "headingIds": true
      },
      "anchors": {
        "maintainCase": false
      },
      "hooks": {
        "onBrokenMarkdownLinks": "warn",
        "onBrokenMarkdownImages": "throw"
      }
    },
    "future": {
      "v4": {
        "removeLegacyPostBuildHeadAttribute": false,
        "useCssCascadeLayers": true
      },
      "experimental_faster": {
        "swcJsLoader": false,
        "swcJsMinimizer": false,
        "swcHtmlMinimizer": false,
        "lightningCssMinimizer": false,
        "mdxCrossCompilerCache": false,
        "rspackBundler": false,
        "rspackPersistentCache": false,
        "ssgWorkerThreads": false
      },
      "experimental_storage": {
        "type": "localStorage",
        "namespace": false
      },
      "experimental_router": "browser"
    }
  },
  
  "stylesheets": ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  "titleDelimiter": "|",
  "noIndex": false
};