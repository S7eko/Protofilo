import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// "homepage": "https://S7eko.github.io/Protofilo",

// ,
//     "predeploy": "npm run build",
//   "deploy": "gh-pages -d build"