import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.setStateMovies = this.setStateMovies.bind(this);
  }

  async componentDidMount() {
    const arrMovies = await getMovies();
    this.setStateMovies(arrMovies);
  }

  setStateMovies(arrMovies) {
    this.setState({ movies: [...arrMovies] });
    this.setState({ loading: false });
  }

  render() {
    const { movies } = this.state;
    const { loading } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        {loading && <Loading />}
      </div>
    );
  }
}

export default MovieList;
