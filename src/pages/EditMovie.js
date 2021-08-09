import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie);
  }

  async fetchMovies() {
    // Fazer a requisição com getMovies()
    this.setState(
      { loading: true },
      async () => {
        const list = await movieAPI.getMovie()
          .then((data) => data);
        this.setState({
          movie: list,
          loading: false,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie, loading } = this.state;
    console.log(loading, movie);
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

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }),
};

EditMovie.defaultProps = {
  match: '1',
};

export default EditMovie;
