import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    const upMovie = await updateMovie(updatedMovie).then((resolve) => resolve);
    this.setState((state) => ({
      movie: state.movie + upMovie,
      shouldRedirect: true,
    }));
  }

  fetchAPI = async () => {
    const { match } = this.props;
    const { getMovie } = movieAPI;
    this.setState({
      status: 'loading',
    });
    const actualMovie = await getMovie(match.params.id)
      .then((result) => result);
    this.setState({
      movie: actualMovie,
      status: '',
    });
  };

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf().isRequired,
};

export default EditMovie;
