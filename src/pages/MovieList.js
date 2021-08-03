import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => response).then((movies) => {
      this.setState({ loading: false, movies });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading
          ? <p>Carregando...</p>
          : movies
            .map((movie) => (<MovieCard
              key={ movie.title }
              movie={ movie }
            />))}
      </div>
    );
  }
}

export default MovieList;
