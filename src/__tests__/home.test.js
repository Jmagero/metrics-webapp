import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Home from '../pages/Home';

describe('Check that elements are display', () => {
  test('Test Regions', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByText('STATS BY REGION')).toBeInTheDocument();
  });
});
