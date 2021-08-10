import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">
          <MovieList />
        </Link>
      </BrowserRouter>
    );
  }
}

export default App;
