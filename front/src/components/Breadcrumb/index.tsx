import * as Style from './styles';
import { Container } from 'styles/grid';

interface BreacrumbProps {
  categories: string[];
}

const Breadcrumb: React.FC<BreacrumbProps> = ({ categories }) => {
  return (
    <Style.Wrapper>
      <Container>
        {categories &&
          categories.map((c, i) => (
            <p key={c + i} className="category-item">
              {c}
              {i < categories.length - 1 ? ' > ' : ''}
            </p>
          ))}
      </Container>
    </Style.Wrapper>
  );
};

export default Breadcrumb;
