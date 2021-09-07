import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieForm } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieFromUrl = this.getMovieFromUrl.bind(this);
  }

  componentDidMount() {
    this.getMovieFromUrl();
  }

  handleSubmit(updateMovie) {
    movieAPI.updateMovie(updateMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async getMovieFromUrl() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const AMovie = await movieAPI.getMovie(id);
    if (AMovie) {
      this.setState({
        movie: AMovie,
        status: true,
      });
    }
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === false) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
