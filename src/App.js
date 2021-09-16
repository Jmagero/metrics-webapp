/* eslint-disable */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './components/Homepage';
import FilteredPage from './components/filteredPage';
import { getData } from './redux/covid/covid';
const  App = () => {
  const state = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path={`/${state.country}`}>
        <FilteredPage />
      </Route>
    </Switch>
  </div>
  );
}
export default App;
