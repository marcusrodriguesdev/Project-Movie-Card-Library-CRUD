import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    createMovie(newMovie);
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default NewMovie;
