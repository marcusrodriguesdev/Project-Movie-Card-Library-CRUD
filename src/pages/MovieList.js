import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    // console.log(movieAPI.getMovies()); // Retorna uma promise
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies }));// A response é um array de objetos ( os filmes )
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    if (movies.length === 0) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
