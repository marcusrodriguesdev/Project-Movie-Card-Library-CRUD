import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
    this.fetchAPi = this.fetchAPi.bind(this);
  }

  componentDidMount() {
    this.fetchAPi();
  }

  async fetchAPi() {
    const fetchMovies = await movieAPI.getMovies();
    this.setState({ movies: fetchMovies });
  }

  render() {
    const { movies } = this.state;
    const Loading = <p> Carregando... </p>;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {
          movies.length === 0
            ? Loading
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
