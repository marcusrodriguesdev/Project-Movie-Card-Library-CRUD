// Initial Commit
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" render={ () => <MovieDetails /> } />
      </BrowserRouter>
    );
  }
}

export default App;
