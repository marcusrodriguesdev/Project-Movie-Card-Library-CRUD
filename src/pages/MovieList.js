import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  changeState() {
    console.log('alo');
    this.setState({
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading === true
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        {/* <Loading /> */}
        {/* {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)} */}
      </div>
    );
  }
}

export default MovieList;
