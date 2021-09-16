import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './components/Homepage';
import FilteredPage from './components/filteredPage';
import { getData } from './redux/covid/covid';

const App = () => {
  const state = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Router>
      <Switch>
        <Route path={`/${state.country}`}>
          <FilteredPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
