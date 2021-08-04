import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;

    return (
      shouldRedirect ? <Redirect to="/" />
        : (
          <div data-testid="new-movie" className="edit-page">
            <div className="edit-form-card">
              <h1>New Movie</h1>
              <MovieForm onSubmit={ this.handleSubmit } />
            </div>
          </div>)
    );
  }
}
export default NewMovie;
