import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      exibir: 'carregando',
    };
    this.requisitMovies.bind(this);
  }

  componentDidMount() {
    this.requisitMovies();
  }

  async requisitMovies() {
    const respons = await movieAPI.getMovies();
    this.setState({
      movies: [...respons],
      exibir: 'carregado',
    });
  }

  render() {
    const { movies, exibir } = this.state;
    if (exibir === 'carregando') {
      return <Loading />;
    }

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
