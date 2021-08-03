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
      loading: true,
    };

    this.displayMovies = this.displayMovies.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  displayMovies() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        <nav>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </nav>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }

  async fetchApi() {
    this.setState({ loading: true }, async () => {
      const response = await movieAPI.getMovies();
      this.setState({
        movies: [...response],
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      loading ? <Loading /> : this.displayMovies()
    );
  }
}

export default MovieList;
