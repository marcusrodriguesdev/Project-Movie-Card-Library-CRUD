import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={ MovieList } />
            <Route path="/movies/new" exact component={ NewMovie } />
            <Route path="/movies/:id" exact component={ MovieDetails } />
            <Route path="/movies/:id/edit" exact component={ EditMovie } />
            <Route path="*" exact component={ NotFound } />
          </Switch>
          <Route path="/" exact>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
