import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route path="/movies/:id" render={ () => <MovieDetails /> } />
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="/*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
    // foi consultado o link: https://imasters.com.br/front-end/gerenciando-rotas-com-react-router, para inplementar a rota que renderiza o componente NotFound.
  );
}

export default App;
