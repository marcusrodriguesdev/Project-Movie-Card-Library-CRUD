import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

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

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
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
    const thisIsAMovie = await movieAPI.getMovie(id);
    console.log(id);
    if (thisIsAMovie) {
      this.setState({
        movie: thisIsAMovie,
        status: true,
      });
    }
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === false) {
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

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
