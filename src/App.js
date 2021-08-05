import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetais from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* <div>Movie Card Library CRUD</div> */}
      <Switch>
        <Route exact component={ MovieList } path="/" />
        <Route exact component={ NewMovie } path="/movies/new" />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetais { ...props } /> }
        />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } path="*" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
