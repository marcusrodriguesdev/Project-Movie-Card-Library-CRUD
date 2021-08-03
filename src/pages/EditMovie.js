import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropType from 'prop-types';
import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, shouldRedirect: false, status: 'loading' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.fetchMovie(id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovie(id) {
    const movie = await movieAPI.getMovie(id);
    this.setState(
      { movie, status: 'ok' },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
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
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.oneOfType([PropType.string, PropType.number]),
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
