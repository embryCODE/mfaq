import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/shared/Container';

const Home: NextPage = () => {
  return (
    <Container isProse={true}>
      <Head>
        <title>Mason&apos;s FAQ</title>
        <meta name="description" content="Mason's frequently asked questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Mason&apos;s Frequently Asked Questions!</h1>

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

      <p>
        Unicorn hot chicken umami, twee blue bottle mustache artisan succulents
        franzen poke bushwick ascot copper mug thundercats Brooklyn. Jean shorts
        +1 pour-over, chartreuse gentrify food truck street art forage cray
        listicle austin viral cardigan jianbing. Venmo chambray health goth fam
        craft beer. Copper mug waistcoat taiyaki yuccie pinterest farm-to-table
        tattooed umami semiotics.
      </p>

      <p>
        Asymmetrical drinking vinegar gochujang kogi, pug coloring book palo
        santo gluten-free fingerstache sriracha green juice tacos. Palo santo
        austin hella skateboard helvetica jianbing. Asymmetrical kogi big mood
        offal. Keytar organic umami keffiyeh, dreamcatcher farm-to-table selvage
        mixtape paleo gochujang chicharrones kinfolk salvia art party. Locavore
        actually skateboard marfa kale chips helvetica banjo tilde, letterpress
        same shoreditch snackwave. Sus venmo narwhal hell of, squid pour-over
        pok pok man braid occupy vegan pabst freegan.
      </p>

      <p>
        Ethical woke succulents microdosing, franzen disrupt tilde blue bottle
        vinyl organic readymade vaporware whatever snackwave kale chips. Artisan
        church-key craft beer wolf authentic tilde chambray cloud bread mixtape
        vegan. Bicycle rights PBR&B ramps franzen. Flexitarian street art
        typewriter tacos hoodie forage humblebrag mustache yuccie af shoreditch
        polaroid whatever.
      </p>

      <p>
        Cold-pressed biodiesel blog wolf cloud bread, art party DIY plaid hella
        ascot. Food truck 90&apos;s fam prism williamsburg synth salvia selvage
        banh mi yes plz church-key readymade flexitarian JOMO kickstarter.
        Normcore put a bird on it quinoa brunch, retro flexitarian fingerstache
        try-hard pinterest. Synth four loko mixtape pickled, cray chambray
        franzen poutine stumptown yr taxidermy.
      </p>
    </Container>
  );
};

export default Home;
