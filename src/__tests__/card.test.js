import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/CategoryCard';

describe('Check card element', () => {
  const info = {
    id: 1,
    region: 'Asturias',
    active: 1880,
  };
  const { id, region, active } = info;
  render(
    <Router>
      <Card id={id} city={region} activeCases={active} />
    </Router>,
  );

  test('Check card element display', () => {
    expect(screen.getByText('Asturias')).toBeInTheDocument();
  });
});
