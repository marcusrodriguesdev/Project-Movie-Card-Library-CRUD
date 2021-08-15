import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import DeleteMovie from './pages/DeleteMovie';

function App() {
  return (
    <div className="App">
      Movie Card Library CRUD
      <Router>
        <Switch>
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/movies/:id/delete" component={ DeleteMovie } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route path="" component={ NotFound } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
