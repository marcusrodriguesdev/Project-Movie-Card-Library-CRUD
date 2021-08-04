import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <Router>
      <header
        className="header"
      >
        <div
          className="header-child child-1"
        >
          Movie
          <br />
          Card
          <br />
          Library
        </div>
        <div className="header-child child-2">
          <span>CRUD</span>
        </div>
      </header>

      <Link
        to="/movies/new"
        className="add-movie"
      >
        ADICIONAR CARTÃO
      </Link>

      <main>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route path="/" component={ NotFound } />
        </Switch>
      </main>

    </Router>
  );
}

export default App;
