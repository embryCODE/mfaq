import Head from 'next/head';
import { NextPage } from 'next';

import Container from '../components/shared/Container';

const Browse: NextPage = () => {
  return (
    <Container isProse={true}>
      <Head>
        <title>Mason&apos;s FAQ | Browse</title>
        <meta name="description" content="Mason's frequently asked questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Browse</h1>

      <p>
        I&apos;m baby actually tumblr hoodie yes plz jianbing pickled direct
        trade food truck jean shorts. Polaroid vegan vinyl try-hard art party.
        Bitters praxis butcher activated charcoal fit offal woke bruh mumblecore
        microdosing poutine marfa gluten-free. Migas occupy post-ironic fanny
        pack sriracha photo booth gatekeep pickled. Bruh readymade single-origin
        coffee mustache vaporware raclette authentic waistcoat celiac iPhone
        forage twee. Next level VHS hammock godard banh mi try-hard, raclette
        poke occupy williamsburg health goth cornhole literally.
      </p>
    </Container>
  );
};

export default Browse;
