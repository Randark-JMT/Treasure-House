import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <p className={styles.heroIntro}>
                    Treasure-House 是按知识域组织的攻防与安全运维笔记：技术手法与目标服务分列，
                    工程实践与合规基线同处一区，实验环境与赛题复盘单独成栏。
                </p>
                {/* 目录总览是 docs/index.md，此前站内没有任何入口，只能手输 /docs/ 到达 */}
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/">
                        目录总览
                    </Link>
                    <Link
                        className={clsx(
                            'button button--outline button--lg',
                            styles.outlineLight
                        )}
                        to="/blog"
                    >
                        博客
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            /* title={`Hello from ${siteConfig.title}`} */
            title={`Hello ~`}
            description="Randark's personal knowledge database">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
