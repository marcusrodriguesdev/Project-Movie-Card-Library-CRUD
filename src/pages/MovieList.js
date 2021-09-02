import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import '../styles/styles.css';

class MovieList extends Component {
  constructor() {
    super();

    // const { movies } = this.props;

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: [...movies],
    });
  }

  render() {
    const { loading, movies } = this.state;
    // const loadingElement = <p>Carregando...</p>;

    return (
      <div data-testid="movie-list" className="movie-list">
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
