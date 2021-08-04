import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movies: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const returnNewMovie = await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
      movies: [returnNewMovie],
    });
  }

  render() {
    const { shouldRedirect, movies } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm movies={ movies } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
