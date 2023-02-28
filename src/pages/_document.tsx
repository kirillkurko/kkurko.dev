import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en' className='scroll-smooth bg-zinc-900'>
        <Head />
        <body className='font-primary box-border max-[1200px]:overflow-auto'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
