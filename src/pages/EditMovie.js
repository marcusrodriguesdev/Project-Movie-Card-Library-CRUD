import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(updatedMovie) {
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
