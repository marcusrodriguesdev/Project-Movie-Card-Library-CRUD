import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
import { MovieList, NotFound, NewMovie, MovieDetails, EditMovie } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route
            exact
            path="/movies/:id"
            // this props passes an object = 'RouteComponentProps'
            // {history: {…}, location: {…}, match: {…}, staticContext: undefined}
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/" component={ NotFound } />
        </Switch>
      </Route>
    </BrowserRouter>
  );
}

export default App;
