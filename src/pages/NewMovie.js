import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(() => {
        this.setState({
          redirect: true,
        });
      });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

// Eu e Guilherme Rodrigues estudamos juntos e recebemos ajuda do Gabriel Lenz gabriellenz-projectMovieCardsCrud.

export default NewMovie;
