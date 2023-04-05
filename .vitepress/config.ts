import { defineConfigWithTheme } from 'vitepress'
// @ts-ignore
import baseConfig from '@vue/theme/config'

// import type { Config as ThemeConfig } from '@vue/theme'
import type { DefaultTheme } from 'vitepress'

export default defineConfigWithTheme<DefaultTheme.Config>({
  extends: baseConfig,
  srcDir: 'src',
  scrollOffset: 'header',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#4979ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }]
    // ['meta', { property: 'og:site_name', content: 'codybontecou.com' }],
  ],

  description: '一名前端切图仔的知识存储栈',
  lang: 'zh-CN',
  appearance: 'dark',
  themeConfig: {
    nav: [
      {
        text: 'MarkdownExamples',
        link: '/examples/markdown-examples',
        activeMatch: '/examples/'
      },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],

    sidebar: {
      '/examples/': [
        {
          text: 'Examples',
          items: [
            {
              text: 'Markdown Examples',
              link: '/examples/markdown-examples'
            },
            { text: '文档示例', link: '/examples/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    server: {
      port: 8089
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
