import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import MovieList from './pages/MovieList';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Link to="/">
              <MovieList />
            </Link>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
