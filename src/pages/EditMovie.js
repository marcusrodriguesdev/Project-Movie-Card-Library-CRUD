import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // const loading = 'Carregando...';
  }

  // componentDidMount() {
  // }

  async handleSubmit(updatedMovie) {
    const updated = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: updated,
      shouldRedirect: true,
    });
  }

  // async addToForm(id) {
  // const newMovie = await movieAPI.getMovie(id);
  // this.setState();
  // }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (!shouldRedirect) {
      return <Redirect to="/" />;
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

export default EditMovie;
