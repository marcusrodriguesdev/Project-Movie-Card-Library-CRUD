import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderMovieData = this.renderMovieData.bind(this);
  }

  componentDidMount() {
    this.renderMovieData();
  }

  handleSubmit(updatedMovie) {
    const { history: { push } } = this.props;

    movieAPI.updateMovie(updatedMovie).then((response) => {
      console.log(response);
      if (response === 'OK') push('/');
    });
  }

  renderMovieData() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.setState({ loading: true }, () => {
      movieAPI
        .getMovie(parseInt(id, 10))
        .then((movie) => this.setState({ loading: false, movie }));
    });
  }

  render() {
    const { loading, movie } = this.state;

    return (
      <div data-testid="edit-movie">
        {loading ? (
          <Loading />
        ) : (
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        )}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditMovie;
