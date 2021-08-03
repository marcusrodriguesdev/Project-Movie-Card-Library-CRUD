import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(
        (resolve) => ((resolve === 'OK')
          ? this.setState({ shouldRedirect: true }) : false
        ),
      );
  }

  render() {
    const { movie, shouldRedirect } = this.state;
    if (shouldRedirect) {
    // Redirect
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
