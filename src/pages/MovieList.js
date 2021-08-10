import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loadingState: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loadingState: false,
    });
  }

  render() {
    const { movies, loadingState } = this.state;

    return (
      <div data-testid="movie-list">
        {
          loadingState ? <Loading /> : movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />))
        }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
