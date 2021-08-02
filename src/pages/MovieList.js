import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
    this.trocaState = this.trocaState.bind(this);
  }

  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.trocaState(response);
  }

  trocaState(dados) {
    this.setState({
      loading: true,
      movies: dados,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {
          loading
            ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
            : <Loading />
        }
      </div>
    );
  }
}

export default MovieList;
