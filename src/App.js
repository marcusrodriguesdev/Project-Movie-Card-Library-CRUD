import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="movie-card-header">Movie Card Library CRUD</div>
      <Switch>
        <Route
          exact
          path="/"
          component={ MovieList }
        />
        <Route
          path="/movies/new"
          component={ NewMovie }
        />
        <Route
          path="/movies/:id/edit"
          component={ EditMovie }
        />
        <Route
          path="/movies/:id"
          component={ MovieDetails }
        />
        <Route
          path=""
          component={ NotFound }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// sites de apoio - https://reactrouter.com/web/api/Switch, https://www.w3schools.com/, https://tableless.com.br/como-usar-gradient-no-css-de-forma-consciente/, https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html, https://css-tricks.com/perfect-full-page-background-image/, https://freefrontend.com/css-buttons/, materiais e exercícios curse.
