import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div>
        Movie Card Library CRUD
        {/* <Switch> */}
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
