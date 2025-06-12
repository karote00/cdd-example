import React, { type ReactElement } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

export default function Home(): ReactElement {
  return (
    <Layout
      title="Communication-Driven Development"
      description="A development framework for humans and AI to collaborate more effectively"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Communication-Driven Development</h1>
          <p className="hero__subtitle">
            Build better systems through better communication.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/concept/what-is-cdd"
            >
              Learn About CDD →
            </Link>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
