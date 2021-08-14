import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };

    this.requestMovies = this.requestMovies.bind(this);
  }

  componentDidMount() {
    this.requestMovies();
  }

  async requestMovies() {
    this.setState({ loading: true },
      async () => {
        const request = await movieAPI.getMovies();
        this.setState({
          movies: request,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;
    const loadingelement = <span>Carregando...</span>;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? loadingelement
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
