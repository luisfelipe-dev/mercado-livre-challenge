import { useContext } from 'react';

import * as Style from './styles';
import { Container } from 'styles/grid';

import Breadcrumb from 'components/Breadcrumb';

import { LoadingContext } from 'context/loadingContext';

const IndexPage = ({ infoProduct }) => {
  const loadingContext = useContext(LoadingContext);

  const { breadcrumb } = loadingContext;

  return (
    <Container>
      <Breadcrumb categories={breadcrumb} />
      <Style.Wrapper>
        <div className="picture-product">
          {infoProduct.pictures && (
            <img src={infoProduct.pictures[0]} alt={infoProduct.title} />
          )}
        </div>

        <div className="infos-product">
          {infoProduct.condition && (
            <div className="infos-product__sales">
              <p>
                {infoProduct.condition && infoProduct.condition === 'new'
                  ? 'Nuevo'
                  : 'Usó'}
                <span> - </span>
                {infoProduct.sold_quantity && infoProduct.sold_quantity}{' '}
                {infoProduct.sold_quantity && infoProduct.sold_quantity < 1
                  ? 'Vendidos'
                  : 'Vendido'}
              </p>
            </div>
          )}

          <div className="infos-product__name">
            <p>{infoProduct.title}</p>
          </div>

          <div className="infos-product__price">
            <p>
              {infoProduct.price &&
                new Intl.NumberFormat('es-ar', {
                  style: 'currency',
                  currency: 'ARS',
                  minimumFractionDigits: infoProduct.price.decimals,
                }).format(infoProduct.price.amount)}
            </p>
          </div>

          {infoProduct.title && (
            <div className="infos-product__buy">
              <button>Comprar</button>
            </div>
          )}
        </div>

        {infoProduct.description && (
          <div className="details-product">
            <h2>Descripción del producto</h2>

            <p className="tagline">{infoProduct.description}</p>
          </div>
        )}
      </Style.Wrapper>
    </Container>
  );
};

export default IndexPage;
