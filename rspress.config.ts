import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Blog',
  description: 'Tester learning document collection',
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-icon.png",
    dark: "/rspress-icon.png",
  },
  themeConfig: {
    // 暂时不能开
    // enableContentAnimation: true,
    hideNavbar: 'auto',
    editLink: {
      docRepoBaseUrl:
        'https://github.com/M-sole-0312/blog/tree/main/packages/document/docs',
      text: '📝 在 GitHub 上编辑此页',
    },
    footer: {
      message: '© 2023 Люби себя. All Rights Reserved.',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/M-sole-0312/blog',
      }
    ],
  },
});