import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const newMovieSet = await movieAPI.createMovie(newMovie);
    this.setState(({ movies }) => ({
      movies: [...movies, newMovieSet],
    }));
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

NewMovie.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewMovie;
