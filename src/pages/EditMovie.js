import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.getMovieAPI();
  }

  handleSubmit = async (updatedMovie) => {
    await updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  getMovieAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await getMovie(id);
    this.setState({ movie, loading: false });
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

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
// O Redirect e a descontrução do math foram consutadas do código do Haron Preste

export default EditMovie;
