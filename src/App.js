import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDatails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDatails } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
