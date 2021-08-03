import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      shouldRedirect: false,
    };
  }

  async handleSubmit(newMovie) {
    await createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default NewMovie;
