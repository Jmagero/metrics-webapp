import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import App from '../App';

it('display the right elements', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
