import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      didSubmit: false,
      movie: [],
    };
  }

  async handleSubmit(newMovie) {
    const movieToAdd = await movieAPI.createMovie(newMovie);
    this.setState({
      didSubmit: true,
      movie: movieToAdd,
    });
  }

  render() {
    const { didSubmit, movie } = this.state;
    if (didSubmit && movie.length !== 0) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
