import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
