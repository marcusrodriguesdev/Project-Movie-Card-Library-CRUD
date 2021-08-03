// Initial Commit
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" render={ () => <MovieDetails /> } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
      </BrowserRouter>
    );
  }
}

export default App;
