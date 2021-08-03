import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <h1>
            Movie Card Library CRUD
          </h1>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route exact path="/movies/new" component={ NewMovie } />
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
            {/* path NotFound feita com ajuda do Gabs */}
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
