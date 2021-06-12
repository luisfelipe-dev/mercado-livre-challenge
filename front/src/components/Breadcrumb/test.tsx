import { render, screen } from '@testing-library/react';
import Breadcrumb from '.';

describe('Breadcrumb', () => {
  it('should render the heading', () => {
    render(<Breadcrumb />);

    expect(
      screen.getByRole('heading', { name: /Breadcrumb/i })
    ).toBeInTheDocument();
  });
});
