import React from 'react';
import {
  BrowserRouter,
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
            <MovieList />
          </Route>
          <Route path="/movies/new">
            <NewMovie />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies/:id/edit">
            <EditMovie />
          </Route>
        </Switch>
        <NotFound />
      </BrowserRouter>
    );
  }
}

export default App;
