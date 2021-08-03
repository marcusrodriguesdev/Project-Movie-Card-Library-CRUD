import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieForm } from '../components';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState({
      status: 'loading',

    });
    const Movie = await movieAPI.getMovie(id);

    this.setState({
      movie: [Movie],
      status: 'ready',

    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Redirect
      return (
        <Redirect to="/" />

      );
    }

    if (status === 'loading' || movie === undefined) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie[0] } onSubmit={ this.handleSubmit } />

      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,

    }).isRequired,

  }).isRequired,
};
export default EditMovie;
