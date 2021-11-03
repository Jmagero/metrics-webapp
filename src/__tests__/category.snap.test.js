import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Category from '../components/Category';
import store from '../redux/configureStore';

it('Display category element', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Category />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
