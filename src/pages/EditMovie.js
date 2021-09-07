import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const numero = 6;
    const last = document.URL.slice(document.URL.length - numero);
    getMovie(last).then((result) => (
      this.setState({
        movie: result,
        status: false,
      })
    ));
  }

  handleSubmit(updatedMovie) {
    const numero = 6;
    const last = document.URL.slice(document.URL.length - numero);
    updateMovie(last).then(() => (
      this.setState({
        shouldRedirect: true,
        movie: updatedMovie,
      })
    ));
    console.log(updatedMovie);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    if (status) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        {console.log(movie)}
      </div>
    );
  }
}

export default EditMovie;
