import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    await getMovies().then((response) => {
      this.setState({
        movies: [...response],
      });
    });
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    const loadingMessage = <span>Carregando...</span>;
    return (
      <div data-testid="movie-list">
        <span>
          { movies.length === 0 ? loadingMessage : null}
        </span>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
