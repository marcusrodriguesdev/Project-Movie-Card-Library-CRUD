// Initial Commit
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Route path="/" component={ MovieList } />
      </BrowserRouter>
    );
  }
}

export default App;
