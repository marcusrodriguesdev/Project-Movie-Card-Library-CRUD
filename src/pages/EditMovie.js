import React, { Component } from 'react';

import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      movieReady: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMovieState = this.setMovieState.bind(this);
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    const selectedMovie = await movieAPI.getMovie(id);
    this.setMovieState(selectedMovie);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({ shouldRedirect: true });
  }

  setMovieState(returnedMovie) {
    this.setState({
      movie: { ...returnedMovie },
      movieReady: true });
  }

  render() {
    const { movieReady, shouldRedirect, movie } = this.state;
    const movieFormated = <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;

    return (
      <div data-testid="edit-movie">
        {movieReady ? movieFormated : <Loading />}
        {shouldRedirect && <Redirect to="/" />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default EditMovie;
