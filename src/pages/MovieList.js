import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

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
    this.loadMovies();
  }

  loadMovies = async () => {
    const data = await movieAPI.getMovies();
    this.setState({ loading: false }, async () => {
      this.setState({
        movies: data,
        loading: true,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (!loading) return (<Loading />);
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
