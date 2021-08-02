import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import PageHome from './components/PageHome';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>

      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <MovieList { ...props } /> }
          />

          <Route
            exact
            path="/movies/new"
            render={ (props) => <NewMovie { ...props } /> }
          />

          <Route
            exact path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />

          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />

          <Route
            path="/:notFound"
            render={ (props) => <NotFound { ...props } /> }
          />

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
