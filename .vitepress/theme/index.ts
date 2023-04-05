import { h } from 'vue'
import { VPTheme } from '@vue/theme'
import '../assets/styles/index.css'

import type { App } from 'vue'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      /**
       * 由于使用了 @vue/theme 主题
       * 在 config.ts 中设置的 title themeConfig.siteTitle themeConfig.logo 不再生效
       * 只能通过如下方式进行修改
       */
      'navbar-title': () =>
        h('div', { class: 'nav-logo-content' }, [
          h('img', { src: '/navLogo.png', alt: 'logo' }),
          h('span', 'xsqCoder Blog')
        ])
    })
  },
  enhanceApp({ app }: { app: App }) {}
})
