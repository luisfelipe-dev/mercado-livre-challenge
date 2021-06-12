import { render, screen } from '@testing-library/react';
import ListProducts from '.';

describe('ListProducts', () => {
  it('should render the heading', () => {
    render(<ListProducts />);

    expect(
      screen.getByRole('heading', { name: /ListProducts/i })
    ).toBeInTheDocument();
  });
});
