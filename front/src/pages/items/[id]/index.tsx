import { useEffect, useContext, useState } from 'react';
import Head from 'next/head';

import { infosProduct } from 'services/api';

import Header from 'components/Header';
import PageProduct from 'templates/PageProduct';

import { LoadingContext } from 'context/loadingContext';

function ProductInfo({ query }) {
  const [infoProduct, setInfoProduct] = useState([]);
  const loadingContext = useContext(LoadingContext);

  const { loadingState, setBreadcrumb } = loadingContext;

  const [, setLoading] = loadingState;

  useEffect(() => {
    setLoading(true);
    infosProduct(query).then((res) => {
      setTimeout(() => setLoading(false), 1000);
      setBreadcrumb(res.categories);
      setInfoProduct(res.item);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mercado Livre Brasil</title>
      </Head>

      <Header />

      <PageProduct infoProduct={infoProduct} />
    </>
  );
}

ProductInfo.getInitialProps = async (ctx) => {
  const { query } = ctx;

  return { query: query.id };
};

export default ProductInfo;
