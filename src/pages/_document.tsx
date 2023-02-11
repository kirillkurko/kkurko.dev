import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='font-primary box-border max-[1200px]:overflow-auto bg-white dark:bg-zinc-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
