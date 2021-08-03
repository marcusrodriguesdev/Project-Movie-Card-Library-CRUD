import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" component={ MovieList } />
    </BrowserRouter>
  );
}

export default App;
