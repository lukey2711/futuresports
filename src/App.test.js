import { render, screen } from '@testing-library/react';
import App from './App';
//import the app and library 

// test case
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
