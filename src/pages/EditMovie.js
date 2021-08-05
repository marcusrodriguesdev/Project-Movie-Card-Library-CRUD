import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
/* import * as movieAPI from '../services/movieAPI'; */

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(/* updatedMovie */) {
  }

  render() {
    const { isLoading, status, shouldRedirect, movie } = this.state;
    if (isLoading) return <Loading />;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
