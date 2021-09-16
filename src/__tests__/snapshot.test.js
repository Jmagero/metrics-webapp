import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import store from '../redux/configureStore';
import App from '../App';
import HomePage from '../components/Homepage';
import Button from '../components/submitBtn';

const unmockedFetch = global.fetch;
const data = {
  dates: {
    '2021-09-16': {
      countries: {
        Afghanistan: {
          name: 'Afghanistan',
          today_confirmed: 154361,
          today_deaths: 7183,
          today_new_confirmed: 78,
          today_new_deaths: 9,
          today_new_open_cases: 69,
          today_new_recovered: 0,
          today_recovered: 82586,
        },
      },
    },
  },
  total: {
    today_confirmed: 226869524,
    today_deaths: 4666054,
    today_recovered: 143040923,
  },
  country: 'Afghanistan',
};

beforeAll(() => {
  global.fetch = () => Promise.resolve(
    {
      json: () => Promise.resolve(data),
    },
  );
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

const MockApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


describe('Home Page', () => {
  it('Renders correctly', async () => {
    const home = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});

describe('Submit Button', () => {
  it('Renders Correctly', () => {
    const button = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Button icon="left" path="/" />
        </Router>
      </Provider>,
    );
    expect(button).toMatchSnapshot();
  });
});

