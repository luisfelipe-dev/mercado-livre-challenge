import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LoadingContext } from 'context/loadingContext';
import { debounce } from 'lodash';
import { searchProduct, suggestionProduct } from 'services/api';

import * as Style from './styles';
import { Container } from 'styles/grid';

import OverClick from 'components/OverClick';

interface HeaderProps {
  query?: string;
}

const Header: React.FC<HeaderProps> = ({ query }) => {
  const loadingContext = useContext(LoadingContext);
  // const [suggestionsSearch, setSuggestionsSearch] = useState([]); // would be an API call normally
  const {
    loadingState,
    focus,
    focusState,
    valueSearch,
    ValueState,
    productsState,
    suggestionsSearch,
    setSuggestionsSearch,
    setBreadcrumb,
  } = loadingContext;

  const [, setLoading] = loadingState;
  const [, setFocus] = focusState;
  const [, setValueSearch] = ValueState;

  const router = useRouter();

  const handleSearch = (event) => {
    const { value: nextValue } = event.target;
    setValueSearch(nextValue);
    const debouncedSave = debounce(() => {
      suggestionProduct(nextValue).then((res) => setSuggestionsSearch(res));
    }, 1500);
    debouncedSave();
  };

  const setSearch = () => {
    setLoading(true);
    setFocus(false);
    searchProduct(valueSearch).then((res) => {
      setTimeout(() => setLoading(false), 1000);

      productsState[1](res.products);
      setBreadcrumb(res.categories);
    });
    router.push({
      pathname: '/items',
      query: { q: valueSearch },
    });
  };

  const searchIndication = (value) => {
    setLoading(true);
    setFocus(false);
    setValueSearch(value);
    searchProduct(value).then((res) => {
      setTimeout(() => setLoading(false), 1000);

      productsState[1](res.products);
      setBreadcrumb(res.categories);
    });
    router.push({
      pathname: '/items',
      query: { q: value },
    });
  };

  const backHome = () => {
    setFocus(false);
    setValueSearch('');
    setSuggestionsSearch([]);
    setBreadcrumb([]);
    productsState[1]([]);
    router.push({
      pathname: '/',
    });
  };

  useEffect(() => {
    if (valueSearch === '' && query) {
      setValueSearch(query);
    }
  }, []);

  return (
    <>
      <OverClick primary={focus} onClick={() => setFocus(false)} />
      <Style.Wrapper>
        <Container>
          <div className="flex">
            <div className="nav-logo" onClick={() => backHome()}>
              Mercado Livre Brasil - Onde comprar e vender de Tudo
            </div>

            <div className="nav-search">
              <input
                placeholder="Nunca dejes de buscar"
                type="search"
                name="search"
                autoComplete="off"
                value={valueSearch}
                onClick={() => setFocus(!focus)}
                onChange={(e) => handleSearch(e)}
              />
              <div
                className={`suggestion ${
                  focus && suggestionsSearch.length > 0 ? 'active' : ''
                }`}
              >
                <ul>
                  {suggestionsSearch &&
                    suggestionsSearch.map((item, index) => (
                      <li key={index} onClick={() => searchIndication(item.q)}>
                        <img src="/img/ic_Search.png" alt="icon search" />
                        <span>{item.q}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <button onClick={() => setSearch()}>
                <img src="/img/ic_Search.png" alt="Search icon" />
              </button>
            </div>
          </div>
        </Container>
      </Style.Wrapper>
    </>
  );
};

export default Header;
