import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="dark:bg-gray-900 scroll">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
