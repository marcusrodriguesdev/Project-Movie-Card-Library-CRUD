import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loadingMessage: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const fetchApi = await movieAPI.getMovies();
    this.setState({
      movies: fetchApi,
      loadingMessage: false,
    });
  }

  render() {
    const { movies, loadingMessage } = this.state;

    return (
      <div data-testid="movie-list">
        {loadingMessage ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
