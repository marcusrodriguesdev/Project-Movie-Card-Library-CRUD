import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { MovieForm, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit = async (updatedMovie) => {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      redirect: true,
    });
  }

  fetchMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading, redirect, movie } = this.state;
    const loadingElement = <Loading />;
    if (redirect) return <Redirect to="/" />;

    return (
      <div data-testid="edit-movie">
        {loading ? loadingElement
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default EditMovie;
