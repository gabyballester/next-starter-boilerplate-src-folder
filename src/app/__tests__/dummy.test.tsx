import { render, screen } from '@testing-library/react';
import Dummy from '../dummy';

describe('Dummy', () => {
  beforeEach(() => {
    render(<Dummy />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
