/**
 * 首页 hero 之下的两个区块：七分区导航网格 + 站内约定。
 *
 * 刻意不放 Docusaurus 脚手架的三张 undraw 卡片（文案是模板残留，且不链接站内任何内容）。
 * 分区链接必须与 docs/ 下的真实一级目录一致，改名时同步这里与 docs/index.md 的分区表。
 */
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const Partitions = [
    {
        name: 'DevSecOps',
        to: '/docs/DevSecOps/',
        desc: 'CI/CD、容器化、系统与运维、可观测性、交付模型，以及并入的标准框架与基线核查。',
    },
    {
        name: '红蓝攻防',
        to: '/docs/Attack-Defense/',
        desc: 'Cyber Kill Chain、技术手法、目标服务、内网横向，以及资产测绘、威胁情报、溯源研判与反制。',
    },
    {
        name: '工业控制',
        to: '/docs/ICS/',
        desc: '工控协议、控制平台、行业标准与专用工具。',
    },
    {
        name: '电子取证',
        to: '/docs/Forensic/',
        desc: '样本类型、内存取证、流量取证与日志分析。',
    },
    {
        name: '靶场与实验',
        to: '/docs/Lab/',
        desc: 'CTF 平台部署、网络仿真环境、技术研究与靶机复盘。',
    },
    {
        name: '证书',
        to: '/docs/Certificate/',
        desc: 'Red Hat 认证学习轨道，RHCSA 9 与 RHCE 9。',
    },
    {
        name: 'CheatSheet',
        to: '/docs/CheatSheet/',
        desc: '跨知识域的速查表，实战中直接抄用的命令组合与易错细节。',
    },
];

export default function HomepageFeatures() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.inner}>
                    <h2 className={styles.sectionTitle}>分区导航</h2>
                    <nav className={styles.grid} aria-label="知识库分区">
                        {Partitions.map((p) => (
                            <Link
                                key={p.name}
                                to={p.to}
                                className={styles.card}
                                aria-label={`${p.name} 分区`}
                            >
                                <span className={styles.cardName}>{p.name}</span>
                                <span className={styles.cardDesc}>{p.desc}</span>
                                <span className={styles.cardEnter} aria-hidden="true">
                                    进入 →
                                </span>
                            </Link>
                        ))}
                    </nav>
                    <p className={styles.moreLink}>
                        完整的目录层级与阅读约定见
                        <Link to="/docs/">目录总览</Link>
                        。
                    </p>
                </div>
            </section>
        </>
    );
}
