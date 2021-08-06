import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = { status: 'loading', shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const p = this.props;
    const { id } = p.match.params;
    movieAPI.getMovie(id).then((response) => this.setState({ movie: response, status: 'ok' }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const s = this.state;
    const { status, shouldRedirect, movie } = s;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    if (s.movie) {
      return (
        <div data-testid="edit-movie">

          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        </div>
      );
    }
  }
}

export default EditMovie;
