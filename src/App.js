import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route
            exact
            path="/movies/new"
            render={ (props) => <NewMovie { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
