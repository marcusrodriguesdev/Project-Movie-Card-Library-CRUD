import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ MovieList } />
          <Route path="/movies:id" component={ MovieDetails } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies:id/edit" component={ EditMovie } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
