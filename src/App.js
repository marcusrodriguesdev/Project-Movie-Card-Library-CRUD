import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

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
          <Route exact path="/movies/:id">
            <Link to="/movies/:id">
              <MovieDetails />
            </Link>
          </Route>
          <Route path="/movies/new">
            <Link to="/movies/new">
              <NewMovie />
            </Link>
          </Route>
          <Route path="/movies/:id/edit">
            <Link to="/movies/:id/edit">
              <EditMovie />
            </Link>
          </Route>
        </Switch>
        <NotFound />
      </BrowserRouter>
    );
  }
}

export default App;
