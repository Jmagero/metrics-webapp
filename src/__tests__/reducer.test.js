import reducer from '../redux/covid/covid';

test('Return initialState', () => {
  expect(reducer(undefined, {})).toEqual({
    list: [],
    status: 'idle',
    todayCases: 0,
  });
});
