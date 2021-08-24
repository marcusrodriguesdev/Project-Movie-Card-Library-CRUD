import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: {},
    };
  }

  componentDidMount() {
    const movie = movieAPI.getMovie(1)
      .then((movie) => (this.setState({movie})))
      .then(() => (this.setState({isLoading: false})));
  }

  render() {
    const { isLoading } = this.state;
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (isLoading) {
      return (
        <Loading />
      );
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `String: ${Object.keys(this.props)}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
