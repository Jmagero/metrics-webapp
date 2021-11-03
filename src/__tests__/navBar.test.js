import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';

describe('Check Navbar Element display', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );
  test('Check NavBar element text', () => {
    expect(screen.getByText('covid stats')).toBeInTheDocument();
  });
});
