import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { MovieForm } from '../components';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    console.log(newMovie);
    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    return (
      <div data-testid="new-movie" className="form">
        {shouldRedirect
          ? <Redirect to="/" />
          : null}
        <div className="form">
          <MovieForm onSubmit={ this.handleSubmit } />
        </div>
      </div>
    );
  }
}

export default NewMovie;
