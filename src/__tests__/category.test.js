import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Category from '../components/Category';
import store from '../redux/configureStore';

describe('Check category element', () => {
  render(
    <Provider store={store}>
      <Category />
    </Provider>,
  );
  test('Check card element display', () => {
    expect(screen.getByText('STATS BY REGION')).toBeInTheDocument();
  });
});
