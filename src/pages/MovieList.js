import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState({ loading: true });
    const movieList = await movieAPI.getMovies();
    this.setState({ movies: movieList, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    const carregando = <h1>Carregando...</h1>;
    return (
      loading
        ? carregando
        : (
          <div data-testid="movie-list">
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </div>
        )
    );
  }
}

export default MovieList;
