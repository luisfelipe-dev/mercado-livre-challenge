import { useContext } from 'react';
import { useRouter } from 'next/router';
import { LoadingContext } from 'context/loadingContext';

import * as Style from './styles';

interface listProps {
  id: string;
  title: string;
  price: {
    amount: number;
    currency: string;
    decimals: number;
  };
  thumbnail: string;
  shipping: boolean;
}

const ListProducts: React.FC<listProps> = ({
  id,
  title,
  price,
  thumbnail,
  shipping,
}) => {
  const router = useRouter();
  const loadingContext = useContext(LoadingContext);

  const { productsState, ValueState, setSuggestionsSearch } = loadingContext;

  const [, setValueSearch] = ValueState;

  const toPage = (id) => {
    productsState[1]([]);
    setValueSearch('');
    setSuggestionsSearch([]);
    router.push({
      pathname: '/items/[id]',
      query: { id: id },
    });
  };

  return (
    <Style.Wrapper onClick={() => toPage(id)}>
      <div className="thumbnail">
        <img src={thumbnail} alt="Iphone 12" />
      </div>

      <div className="description">
        <div className={`price ${shipping && 'full'} `}>
          <p>
            {price &&
              new Intl.NumberFormat('es-ar', {
                style: 'currency',
                currency: 'ARS',
                minimumFractionDigits: price.decimals,
              }).format(price.amount)}
          </p>
        </div>
        <p className="title">{title}</p>
      </div>
    </Style.Wrapper>
  );
};

export default ListProducts;
