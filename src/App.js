import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ MovieList } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
