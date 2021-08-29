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
    };

    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    const { getMovies } = movieAPI;
    getMovies().then((response) => {
      this.handleState(response);
    });
  }

  handleState(arr) {
    this.setState({
      movies: arr,
    });
  }

  render() {
    const { movies } = this.state;
    const list = movies.map((movie) => (<MovieCard
      key={ movie.id }
      movie={ movie }
    />));
    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list">
          {movies.length === 0 ? <Loading /> : list }
        </div>
      </div>
    );
  }
}

export default MovieList;
