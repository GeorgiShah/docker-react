import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders smth', () => {
  render(<App />);
  const linkEl = screen.getByText(/learn react/i);
  expect(linkEl).toBeInTheDocument();  
});
