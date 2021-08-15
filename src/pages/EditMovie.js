import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStatusUpdate = this.handleStatusUpdate.bind(this);
  }

  async componentDidMount() {
    const { props } = this;
    const { params } = props.match;
    const { id } = params;
    const requestMovie = await movieAPI.getMovie(id);
    this.handleStatusUpdate(requestMovie);
  }

  handleStatusUpdate(request) {
    this.setState({
      movie: { ...request },
      loading: false,
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
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
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
