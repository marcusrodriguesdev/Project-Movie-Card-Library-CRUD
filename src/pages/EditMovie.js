import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: true,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // const loading = 'Carregando...';
  }

  // componentDidMount() {
  //   this.editMovieRequisition();
  // }

  // async handleSubmit(updatedMovie) {
  //   const updated = await movieAPI.updateMovie(updatedMovie);
  //   this.setState({
  //     movie: updated,
  //     // shouldRedirect: true,
  //   });
  // }

  // editMovieRequisition = async () => {
  //   const { match: { params: { id } } } = this.props;
  //   const movieToEdit = await movieAPI.getMovie(id);
  //   movieAPI.updateMovie(movieToEdit);
  // }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        { status ? <Loading /> : null }
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
