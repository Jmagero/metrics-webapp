import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Card from '../components/CategoryCard';

it('Display one card item', () => {
  const info = {
    id: 'asturias',
    region: 'Asturias',
    active: 1880,
  };
  const { id, region, active } = info;
  const tree = renderer
    .create(
      <Router>
        <Card id={id} city={region} activeCases={active} />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
