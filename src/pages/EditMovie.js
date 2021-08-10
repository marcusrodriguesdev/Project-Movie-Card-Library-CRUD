import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      loading: false,
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({
      redirect: true,
    });
  }

  async fetchMovies() {
    const { match } = this.props;
    const { id } = match.params;
    
    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.getMovies(Number(id));
        this.setState({
          loading: false,
          movie,
        });
      },
    );
  }

  render() {
    const { loading, redirect, movie } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
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
