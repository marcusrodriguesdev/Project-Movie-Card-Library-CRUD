import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMovie: '',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ shouldRedirect: true, });
  }

  render() {
    const { newMovie, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    return (
      <div data-testid="new-movie">
        Adicionar novo filme
        <MovieForm movie={ newMovie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
