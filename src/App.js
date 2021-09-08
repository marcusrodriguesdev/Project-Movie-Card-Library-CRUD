import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/MovieList';
import NewMovie from './pages/NewMovie'
import NotFound from './pages/NotFound'


function App() {
  return (
    <BrowserRouter>
    <div>Movie Card Library CRUD</div>
    <Switch>
    <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
