import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mason&apos;s FAQ</title>
        <meta name="description" content="Mason's frequently asked questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Mason&apos;s Frequently Asked Questions!</h1>

        <p>
          <a href={'https://example.com'}>Here</a> is a test link
        </p>
      </main>

      <footer>
        <a href={'https://example.com'}>Here</a> is a test link
      </footer>
    </div>
  );
};

export default Home;
