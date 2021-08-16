import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.requisitionAPI = this.requisitionAPI.bind(this);
  }

  componentDidMount() {
    this.requisitionAPI();
  }

  async requisitionAPI() {
    this.setState({
      loading: true,
    });
    const movies = await movieAPI.getMovies();
    this.setState({
      movies: [...movies],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    return (
      <div className="movie-list">
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          <Link className="link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
