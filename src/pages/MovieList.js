import React, { Component } from 'react';
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
      movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
    );
  }

  async fetchApi() {
    this.setState({ loading: true }, async () => {
      const response = await movieAPI.getMovies();
      console.log(response);
      this.setState({
        movies: [...response],
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;
    const loadingDisplay = <span>Carregando...</span>;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { loading ? loadingDisplay : this.displayMovies() }
      </div>
    );
  }
}

export default MovieList;
