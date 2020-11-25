import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="google" content="notranslate" />
          <meta name="referrer" content="strict-origin" />
          <meta property="og:title" content="SBM technology CRM system" />
          <meta property="og:site_name" content="SBM technology CRM system" />
          <meta property="og:url" content="http://crm.sbmtec.com" />
          <meta name="generator" content="SBM technology" />
          <meta
            name="description"
            content="SBM technology | Customer relation management system. | Stack: Next.js, React redux, Geist UI"
          />
          <meta
            property="og:description"
            content="SBM technology | Customer relation management system. | Stack: Next.js, React redux, Geist UI"
          />
          
          <script src="js/lib/jquery.min.js"></script>
          <script src="js/lib/apexcharts.min.js"></script>
          <script src="js/lib/jquery.magnific-popup.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument