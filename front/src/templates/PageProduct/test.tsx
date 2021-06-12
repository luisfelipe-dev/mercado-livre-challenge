import { render, screen } from '@testing-library/react';
import PageProduct from '.';

describe('PageProduct', () => {
  it('should render the heading', () => {
    render(<PageProduct />);

    expect(
      screen.getByRole('heading', { name: /PageProduct/i })
    ).toBeInTheDocument();
  });
});
