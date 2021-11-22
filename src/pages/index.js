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
    // <header className={clsx('hero hero--primary', styles.heroBanner)}></header>
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("container", styles.heroBannerContainer)}>
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <h1 className={clsx('hero__title', styles.heroBannerTitle)}>{siteConfig.title}</h1>
        
        <div className={clsx('hero__text', styles.heroBannerText)}>
          <p>지속 가능한 도시성장과 삶의 질 향상을 위한 데이터 기반의 스마트 시티를 실현하는 개방형 데이터 허브 아키텍처 및 핵심 기술</p>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn about CityDataHub ⏱️
          </Link> 
        </div>
      </div>
    </header>
  );
}



function HomepageHeaderTitle(){
  const {siteConfig} = useDocusaurusContext();

  return(
    <header className={clsx('header-title', styles.heroBanner)}>
      <div className="container">
        <h1 className="header-title-text">
          {siteConfig.title}
        </h1>
      </div>
    </header>
  )
}

function HomepageContents(){
  return(
    <div className={clsx('homeContainer', styles.homeContainer )}>

      <div className={clsx('homeContents', styles.homeContents)}>
        <h2>overview </h2>

      </div>
    </div>
  )
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>

      <HomepageHeader />
      <main>
        <HomepageContents/>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
