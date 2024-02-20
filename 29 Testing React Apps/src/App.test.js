import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const asyncComponent = screen.getByTestId('async-component');
  expect(asyncComponent).toBeInTheDocument();
});
