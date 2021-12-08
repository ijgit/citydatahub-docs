import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero_title', styles.heroBannerTitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero_subtitle', styles.heroBannerText)}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <div className={styles.buttons}>
      <Link className="button button--secondary button--lg" to="/docs/intro">
        Set Security Module
      </Link>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageContent/> */}

        
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
