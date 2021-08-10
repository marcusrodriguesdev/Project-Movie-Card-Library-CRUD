import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  // async componentDidMount() {
  //   const response = await movieAPI.getMovies();
  //   this.setState({
  //     movies: response,
  //   });
  // }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => {
        this.setState({ movies: response });
      });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
