import * as Style from './styles';
import { Container } from 'styles/grid';

import Breadcrumb from 'components/Breadcrumb';
import ListProducts from 'components/ListProducts';

const IndexPage = ({ products, breadcrumb }) => {
  return (
    <>
      <Breadcrumb categories={breadcrumb} />
      <Container>
        <Style.Wrapper>
          <ul>
            {products &&
              products.map((item) => (
                <ListProducts
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  shipping={item.free_shipping}
                  price={item.price}
                  thumbnail={item.picture}
                />
              ))}
          </ul>
        </Style.Wrapper>
      </Container>
    </>
  );
};

export default IndexPage;
