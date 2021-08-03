import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Header from './Header';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true });
    getMovies()
      .then((data) => {
        this.setState({
          movies: data,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) {
      return <Loading />;
    }
    return (
      <section className="main">
          <Header />
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
          <Link to="/movies/new" className="add-button">ADICIONAR CARTÃO</Link>
      </section>
    );
  }
}

export default MovieList;
