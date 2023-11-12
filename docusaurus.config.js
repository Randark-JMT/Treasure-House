// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Randark_JMT - 陈橘墨',
    tagline: 'Why So Serious',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'http://treasure-house.randark.site',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'JMT', // Usually your GitHub org/user name.
    projectName: 'Treasure-House', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Randark-JMT/Treasure-House/edit/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Randark-JMT/Treasure-House/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Treasure-House',
            logo: {
                alt: 'Randark_JMT',
                src: 'img/logo.jpg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'Environment_Sidebar',
                    position: 'left',
                    label: '环境配置',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'Devops_Sidebar',
                    position: 'left',
                    label: '开发部署',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'Penetration_Sidebar',
                    position: 'left',
                    label: '渗透测试',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'AttackDefense_Sidebar',
                    position: 'left',
                    label: '红蓝攻防',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'Forensic_Sidebar',
                    position: 'left',
                    label: '电子取证',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'ICS_Sidebar',
                    position: 'left',
                    label: '工业控制',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'CTF_Sidebar',
                    position: 'left',
                    label: 'CTF研究',
                },
                {
                    href: '/blog',
                    label: 'Blog',
                    position: 'right',
                },
                {
                    href: 'https://randark.site/',
                    label: '主站',
                    position: 'right',
                },
                {
                    href: 'https://github.com/Randark-JMT',
                    label: 'GitHub',
                    position: 'right',
                },
                /* {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                }, */
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '社交联系',
                    items: [
                        {
                            label: 'Github',
                            href: 'https://github.com/Randark-JMT',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/Randark_JMT',
                        },
                        {
                            label: 'Foxmail mail',
                            href: 'mailto:randark@foxmail.com',
                        },
                        {
                            label: 'Google mail',
                            href: 'mailto:randarkjmt@gmail.com',
                        },
                    ],
                },
                {
                    title: '相关项目友链',
                    items: [
                        {
                            label: 'Github - CTF-Archives',
                            href: 'https://github.com/CTF-Archives',
                        },
                        {
                            label: 'GitHub - ctf-docker-template',
                            href: 'https://github.com/CTF-Archives/ctf-docker-template',
                        },
                        {
                            label: 'GitHub - CTF-QuickStart',
                            href: 'https://github.com/ProbiusOfficial/CTF-QuickStart',
                        },
                        {
                            label: '探姬の星灵枢纽',
                            href: 'https://blog.probius.xyz/',
                        },
                        {
                            label: '雪殇 - snowywar.top',
                            href: 'http://www.snowywar.top',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Treasure-House By Randark-JMT, Built with Docusaurus.`,
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        prism: {
            additionalLanguages: ['powershell', 'php', 'ini', 'json'],
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true,
            },
        },
    },
    markdown: {
        mermaid: true,
    },
};

module.exports = config;
