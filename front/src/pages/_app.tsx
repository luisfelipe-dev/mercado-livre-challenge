import AppProvider from 'context';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A maior Comunidade de compra e venda online da América Latina."
          />
          <meta
            property="og:image"
            content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
          />
          <link rel="shortcut icon" href="/img/favicon.svg" />
          <link rel="apple-touch-icon" href="/img/favicon.svg" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
