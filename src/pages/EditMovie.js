import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
import { updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    // const {match: {params: {id}}} = this.props;
    this.state = {
      status: 'ok',
      shouldRedirect: 'Ok',
      movie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {

  }

  handleSubmit(updatedMovie) {
    this.setState({
      status: 'loading',
    });
    const response = updateMovie(updatedMovie);
    if (response) {
      return this.setState({
        status: 'Ok',
        shouldRedirect: 'Ok',
      });
    }
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
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
