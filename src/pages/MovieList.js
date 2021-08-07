import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    getMovies()
      .then((movies) => this.handleState(movies));
  }

  handleState(movieArray) {
    this.setState({
      movies: movieArray,
    });
  }

  render() {
    const { movies } = this.state;
    if (!movies) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
