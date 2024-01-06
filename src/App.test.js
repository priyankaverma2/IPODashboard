import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders Login component initially', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /login/i, href: '/' })).toBeInTheDocument();
});


