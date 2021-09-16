import { Switch, Route } from 'react-router';
import HomePage from './components/Homepage';
import FilteredPage from './components/filteredPage';
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
  );
}

export default App;
