import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>
      <Router>
        <div>
          Movie Card Library CRUD
        </div>
      </Router>
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    </div>
  );
}

export default App;
