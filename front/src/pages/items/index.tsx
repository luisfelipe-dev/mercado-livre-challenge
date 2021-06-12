import Head from 'next/head';
import { useEffect, useState, useContext } from 'react';

import { searchProduct } from 'services/api';

import IndexPage from 'templates/IndexPage';
import Header from 'components/Header';

import { LoadingContext } from 'context/loadingContext';

function Items({ query }) {
  const loadingContext = useContext(LoadingContext);
  const {
    loadingState,
    products,
    productsState,
    valueSearch,
    breadcrumb,
    setBreadcrumb,
  } = loadingContext;

  const [, setLoading] = loadingState;

  useEffect(() => {
    if (valueSearch === '') {
      setLoading(true);
      searchProduct(query).then((res) => {
        setTimeout(() => setLoading(false), 1000);
        productsState[1](res.products);
        setBreadcrumb(res.categories);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Mercado Livre Brasil</title>
      </Head>

      <Header query={query} />

      <IndexPage products={products} breadcrumb={breadcrumb} />
    </>
  );
}

Items.getInitialProps = async (ctx) => {
  const { req, res, query } = ctx;

  return { query: query.q };
};

export default Items;
