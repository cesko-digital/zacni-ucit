import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const G_TAG_ID = 'UA-153416106-1';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#7f50ff" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          {process.env.NODE_ENV === 'production' ? (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${G_TAG_ID}', {
                      originalLocation: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          ) : (
            <script>window.dataLayer = [];</script>
          )}
        </Head>
        <body>
          <Main />
          {process.env.NODE_ENV === 'production' && (
            <>
              {/* Google Tag Manager (noscript)  */}
              <noscript>
                <iframe
                  src={`https://www.googletagmanager.com/ns.html?id=${G_TAG_ID}`}
                  height="0"
                  width="0"
                  style={{ display: 'none', visibility: 'hidden' }}
                  title="Google Tag Manager"
                />
              </noscript>

              {/*  End Google Tag Manager (noscript) */}
            </>
          )}

          <NextScript />
        </body>
      </Html>
    );
  }
}
