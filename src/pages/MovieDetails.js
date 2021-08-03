import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [movieAPI],
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState({
      loading: true,
    });
    const Movie = await movieAPI.getMovie(id);

    this.setState({
      movie: [Movie],
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading } = this.state;


    if (loading === true && movie === undefined) {
      return (
        <Loading />

      );
    }

    if (movie !== undefined) {
      const { storyline, imagePath, genre, rating, subtitle } = movie[0];
      console.log(movie[0]);

      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieDetails;
