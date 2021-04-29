import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
          />
          <link rel="shortcut icon" href="favicon.ico" type="image/png" />
          <script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js" />
        </Head>
        <body className="bg-default">
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}