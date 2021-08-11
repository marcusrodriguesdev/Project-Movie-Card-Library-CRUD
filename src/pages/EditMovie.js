import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      didingRequisition: true,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // const loading = 'Carregando...';
  }

  // componentDidMount() {
  //   const { match: { params: { id } } } = this.props;
  //   this.updateMovieRequisition(id);
  // }

  handleSubmit(/* updatedMovie */) {
    this.setState({
      shouldRedirect: true,
    });
  }

  updateMovieRequisition = async (id) => {
    const getMovieToEdit = await movieAPI.getMovie(id);
    const movieUpdated = await movieAPI.updateMovie(getMovieToEdit);
    this.setState({
      movie: movieUpdated,
    });
  }

  render() {
    const { didingRequisition, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        { didingRequisition ? <Loading /> : null }
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
