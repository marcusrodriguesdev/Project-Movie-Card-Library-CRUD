import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };

    this.requestMoviesAPI = this.requestMoviesAPI.bind(this);
  }

  componentDidMount() {
    this.requestMoviesAPI();
  }

  async requestMoviesAPI() {
    const data = await movieAPI.getMovies();
    this.setState({
      movies: [...data],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {
          loading ? <Loading /> : movies
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
