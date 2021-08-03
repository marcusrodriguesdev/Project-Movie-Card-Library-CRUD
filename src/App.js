import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import { Header, Touchable } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header title="Movie Card Library CRUD">
        <Touchable to="/movies/new" type="button">ADICIONAR CARTÃO</Touchable>
      </Header>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="/" component={ NotFound } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
