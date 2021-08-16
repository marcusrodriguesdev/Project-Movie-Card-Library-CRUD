import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Switch>
      {/* referencia aula de manhã com o mentor me ajudou a
       intender melhor sobre * e o exact */}
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
