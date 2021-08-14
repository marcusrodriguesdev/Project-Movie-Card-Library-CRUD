import React from 'react';
import { BrowserRouter, Route, Route as Router } from 'react-router-dom';
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
        <Route path="/" component={ MovieList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
