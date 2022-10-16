import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className={'tw-p-4 tw-prose'}>
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
