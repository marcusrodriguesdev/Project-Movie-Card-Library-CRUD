import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: null,

    };
  }

  async handleSubmit(movieData) {
    await movieAPI.createMovie(movieData);
    this.setState({ shouldRedirect: '/' });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect === '/') {
      return <Redirect to={ shouldRedirect } />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
