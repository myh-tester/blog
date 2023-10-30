import * as path from 'path';
import { defineConfig } from 'rspress/config';

const GITHUB = 'https://github.com/myh-tester/blog'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/blog',
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
        'https://github.com/myh-tester/blog/tree/main/docs',
      text: '📝 在 GitHub 上编辑此页',
    },
    footer: {
      message: `Люби себя 的博客，版权所有 © 2023-${new Date().getFullYear()}`,
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: GITHUB,
      }
    ],
  },
});