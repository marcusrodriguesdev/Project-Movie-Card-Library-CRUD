import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI'; 

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  handleSubmit(/* updatedMovie */) {
  }

  async fetchMovieDetails() {
    const { match: { params: { id } } } = this.props; /* match https://reactrouter.com/web/api/match */
    const movieData = await movieAPI.getMovie(id);
    this.setState({ movie: movieData, isLoading: false });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (isLoading) return <Loading />;
    if (shouldRedirect) {
      // Redirect
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
