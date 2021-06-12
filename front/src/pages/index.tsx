import Head from 'next/head';

import IndexPage from 'templates/IndexPage';
import Header from 'components/Header';
import { LoadingContext } from '../context/loadingContext';
import { useContext, useEffect } from 'react';

export default function Home() {
  const loadingContext = useContext(LoadingContext);
  const { loadingState } = loadingContext;
  const [, setLoading] = loadingState;

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  return (
    <>
      <Head>
        <title>Mercado Livre Brasil</title>
      </Head>

      <Header />
    </>
  );
}
