import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';

describe('App Component', () => {
  it('renders the heading', () => {
    const { getByText } = render(<App />);
    expect(getByText(/hello there/i)).toBeInTheDocument();
  });

  it('renders the heading', () => {
    const { getByText } = render(<App />);
    expect(getByText(/hello there/i)).toBeInTheDocument();
  });
});
